import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcagComponent } from './pages/wcag/wcag.component';
import {WcagRoutingModule} from './wcag-routing.module';



@NgModule({
  declarations: [WcagComponent],
  imports: [
    WcagRoutingModule,
    CommonModule
  ]
})
export class WcagModule { }
