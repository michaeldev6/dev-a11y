import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSamplesComponent } from './pages/code-samples/code-samples.component';
import {CodeSamplesRoutingModule} from './code-samples-routing.module';



@NgModule({
  declarations: [CodeSamplesComponent],
  imports: [
    CodeSamplesRoutingModule,
    CommonModule
  ]
})
export class CodeSamplesModule { }
