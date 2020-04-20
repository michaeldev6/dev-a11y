import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../../../core/components/base-page/base-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }

}
