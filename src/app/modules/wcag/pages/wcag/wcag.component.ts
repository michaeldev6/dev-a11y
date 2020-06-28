import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../../../core/components/base-page/base-page.component';

@Component({
  selector: 'app-wcag',
  templateUrl: './wcag.component.html',
  styleUrls: ['./wcag.component.scss']
})
export class WcagComponent extends BasePageComponent {
  pageTitle = 'WCAG Checklist';
}
