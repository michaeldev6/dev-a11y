import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenReadersComponent } from './pages/screen-readers/screen-readers.component';
import {ScreenReadersRoutingModule} from './screen-readers-routing.module';



@NgModule({
  declarations: [ScreenReadersComponent],
  imports: [
    ScreenReadersRoutingModule,
    CommonModule
  ]
})
export class ScreenReadersModule { }
