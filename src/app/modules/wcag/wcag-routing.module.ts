import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WcagComponent} from './pages/wcag/wcag.component';

const routes: Routes = [
  {
    path: '',
    component: WcagComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcagRoutingModule { }
