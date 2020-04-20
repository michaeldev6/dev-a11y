import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScreenReadersComponent} from './pages/screen-readers/screen-readers.component';

const routes: Routes = [
  {
    path: '',
    component: ScreenReadersComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenReadersRoutingModule { }
