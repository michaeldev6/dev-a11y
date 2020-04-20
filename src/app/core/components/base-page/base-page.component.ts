import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {PageTitleService} from '../../services/page-title.service';
import {FocusService} from '../../services/focus.service';
import {FocusableIds} from '../../../shared/enums/focusable-ids';

@Component({
  selector: 'app-base-page',
  template: '',
  styleUrls: []
})
export class BasePageComponent extends BaseComponent implements OnInit {
  pageTitle = '';

  constructor(
    protected pageTitleService: PageTitleService,
    protected focusService: FocusService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    setTimeout(() => {
      this.pageTitleService.updatePageTitle(this.pageTitle, !!this.pageTitle);
      // set timeout needed to give a moment for the titles to update in the page top element
      setTimeout(() => {
        this.focusService.focusOnElement(FocusableIds.PAGE_TOP);
      });
    });
  }
}
