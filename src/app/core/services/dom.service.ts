import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector
} from '@angular/core';
import {WindowUtil} from '../../shared/utils/window.util';



@Injectable({
  providedIn: 'root'
})
export class DomService {
  private id = 0;
  private componentRefs: { [key: number]: ComponentRef<any> } = {};

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendComponentToBody(component: any): number {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    WindowUtil.nativeDocument.body.appendChild(domElem);

    // 5. increment ID to keep it unique
    this.id++;

    this.componentRefs[this.id] = componentRef;

    // return the index that this component ref is at.
    return this.id;
  }

  getComponent(id: number): ComponentRef<any> | null {
    if (this.componentRefs[id]) {
      return this.componentRefs[id];
    }
    return null;
  }

  removeComponentFromBody(id: number): void {
    if (this.componentRefs[id]) {
      this.appRef.detachView(this.componentRefs[id].hostView);
      this.componentRefs[id].destroy();
    }
  }
}
