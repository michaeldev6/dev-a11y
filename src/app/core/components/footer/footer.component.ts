import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {FocusableIds} from '../../../shared/enums/focusable-ids';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseComponent {
  focusableIds: typeof FocusableIds = FocusableIds;
}
