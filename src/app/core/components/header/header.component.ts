import {Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {FocusableIds} from '../../../shared/enums/focusable-ids';
import {KeyboardService} from '../../services/keyboard.service';
import {filter, map, takeWhile} from 'rxjs/operators';
import {IKeypressEvent} from '../../../shared/interfaces/keypress-event';
import {ESC_KEY, TAB_KEY} from '../../../shared/constants/keycodes';
import {IRouteItem} from '../../../shared/interfaces/route-item';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  routeItems: IRouteItem[] = [
    {
      text: 'WCAG Checklist',
      route: '/wcag'
    },
    {
      text: 'ARIA',
      route: '/aria'
    },
    {
      text: 'Code Samples',
      route: '/code-samples'
    },
    {
      text: 'Screen Readers',
      route: '/screen-readers'
    },
    {
      text: 'Links and Resources',
      route: '/links-resources'
    },
    {
      text: 'Main Page',
      route: '/'
    }
  ];

  currentRoute = '';
  focusableIds: typeof FocusableIds = FocusableIds;
  isMenuOpen = false;

  @ViewChild('triggerButton', {static: true}) toggleNavButton: ElementRef;
  @ViewChild('navigation') navigationContainerElement: ElementRef;
  // @ViewChild('lastLink') lastLinkElement: ElementRef;
  @ViewChildren('routeItem') links: QueryList<ElementRef>;

  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    if (!this.navigationContainerElement.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  constructor(
    private keyboardService: KeyboardService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.setupKeyboardListeners();
    this.getRoute();
  }

  private closeMenu(): void {
    this.isMenuOpen = false;
  }

  getRoute(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
  }

  private setupKeyboardListeners(): void {
    this.keyboardService.getKeypressEvent()
      .pipe(takeWhile(() => this.active))
      .subscribe((event: IKeypressEvent) => {
        this.handleKeypressEvent(event);

      });
  }

  private handleEscPress(event: IKeypressEvent): void {
    // if the user pressed esc while the nav is open
    if (this.navigationContainerElement.nativeElement.contains(event.target)) {
      this.closeMenu();
      this.toggleNavButton.nativeElement.focus();
    }
  }

  private handleKeypressEvent(event: IKeypressEvent): void {
    if (this.isMenuOpen) {
      switch(event.keycode) {
        case TAB_KEY:
          this.handleTabPress(event);
          break;
        case ESC_KEY:
          this.handleEscPress(event);
      }

    }
  }

  private handleTabPress(event: IKeypressEvent): void {
    if (
      // tabbing off of the sub menu
      (this.links.last.nativeElement === event.target && !event.isShiftPressed)
      // tabbing off before the toggle menu button and not into sub menu
      || (this.toggleNavButton.nativeElement === event.target && event.isShiftPressed)
    ) {
      this.closeMenu();
    }
  }

  onLinkClick(route: string): void {
    if (route !== this.currentRoute) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // focus on the first link after the sub menu is opened
    if (this.isMenuOpen) {
      setTimeout(() => {
        this.links.first.nativeElement.focus();
      });
    }
  }
}
