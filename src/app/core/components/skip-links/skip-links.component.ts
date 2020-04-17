import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {FocusService} from '../../services/focus.service';
import {SkipLinksService} from '../../services/skip-links.service';
import {ISkipLink} from '../../../shared/interfaces/skip-link';
import {takeWhile} from 'rxjs/operators';
import {FocusableIds} from '../../../shared/constants/focusable-ids';

@Component({
  selector: 'app-skip-links',
  templateUrl: './skip-links.component.html',
  styleUrls: ['./skip-links.component.scss']
})
export class SkipLinksComponent extends BaseComponent implements OnInit {

  focusableIds: typeof FocusableIds = FocusableIds;
  skipLinks: ISkipLink[] = [];

  constructor(
    private skipLinkService: SkipLinksService,
    private focusService: FocusService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.getSkipLinks();
  }

  private getSkipLinks(): void {
    this.skipLinkService.getSkipLinks()
      .pipe(takeWhile(() => this.active))
      .subscribe((skipLinks: ISkipLink[]) => {
        this.skipLinks = skipLinks;
      });
  }

  focusOnElement(id: FocusableIds): void {
    this.focusService.focusOnElement(id);
  }
}
