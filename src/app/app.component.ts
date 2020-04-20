import {Component, OnInit} from '@angular/core';
import {BaseComponent} from './core/components/base/base.component';
import {FocusableIds} from './shared/enums/focusable-ids';
import {PageTitleService} from './core/services/page-title.service';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  focusableIds: typeof FocusableIds = FocusableIds;
  pageTitle = '';

  constructor(private pageTitleService: PageTitleService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.getPageTitle();
  }

  getPageTitle(): void {
    this.pageTitleService.getPageTitle()
      .pipe(takeWhile(() => this.active))
      .subscribe(title => this.pageTitle = title);
  }
}
