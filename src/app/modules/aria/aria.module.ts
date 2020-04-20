import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AriaComponent } from './pages/aria/aria.component';
import {AriaRoutingModule} from './aria-routing.module';



@NgModule({
  declarations: [AriaComponent],
  imports: [
    AriaRoutingModule,
    CommonModule
  ]
})
export class AriaModule { }
