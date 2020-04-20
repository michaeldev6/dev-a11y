import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {FocusableIds} from '../../../shared/enums/focusable-ids';
import {KeyboardService} from '../../services/keyboard.service';
import {takeWhile} from 'rxjs/operators';
import {IKeypressEvent} from '../../../shared/interfaces/keypress-event';
import {TAB_KEY} from '../../../shared/constants/keycodes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  focusableIds: typeof FocusableIds = FocusableIds;
  isMenuOpen = false;

  @ViewChild('triggerButton', {static: true}) toggleNavButton: ElementRef;
  @ViewChild('navigation') navigationContainerElement: ElementRef;
  @ViewChild('lastLink') lastLinkElement: ElementRef;

  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    if (!this.navigationContainerElement.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  constructor(private keyboardService: KeyboardService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.setupKeyboardListeners();
  }

  private setupKeyboardListeners(): void {
    this.keyboardService.getKeypressEvent()
      .pipe(takeWhile(() => this.active))
      .subscribe((event: IKeypressEvent) => {
        this.handleKeypressEvent(event);

      });
  }

  private handleKeypressEvent(event: IKeypressEvent): void {
    if (this.isMenuOpen && event.keycode === TAB_KEY) {
      if (
        // tabbing off of the sub menu
        (this.lastLinkElement.nativeElement === event.target && !event.isShiftPressed)
        // tabbing off before the toggle menu button and not into sub menu
        || (this.toggleNavButton.nativeElement === event.target && event.isShiftPressed)
      ) {
        this.isMenuOpen = false;
      }
    }
  }

  onLinkClick(): void {
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
