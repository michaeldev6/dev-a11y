import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../../../core/components/base-page/base-page.component';

@Component({
  selector: 'app-screen-readers',
  templateUrl: './screen-readers.component.html',
  styleUrls: ['./screen-readers.component.scss']
})
export class ScreenReadersComponent extends BasePageComponent {

  pageTitle = 'Screen Readers';

}
