import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinksResourcesComponent} from './pages/links-resources/links-resources.component';

const routes: Routes = [
  {
    path: '',
    component: LinksResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksResourcesRoutingModule { }
