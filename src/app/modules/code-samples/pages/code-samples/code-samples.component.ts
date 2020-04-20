import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../../../core/components/base-page/base-page.component';

@Component({
  selector: 'app-code-samples',
  templateUrl: './code-samples.component.html',
  styleUrls: ['./code-samples.component.scss']
})
export class CodeSamplesComponent extends BasePageComponent{

  pageTitle = 'Web Accessibility Code Samples';
}
