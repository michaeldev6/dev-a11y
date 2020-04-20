import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AriaComponent} from './pages/aria/aria.component';

const routes: Routes = [
  {
    path: '',
    component: AriaComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AriaRoutingModule { }
