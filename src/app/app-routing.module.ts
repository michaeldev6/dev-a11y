import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'wcag',
    loadChildren: () => import('./modules/wcag/wcag.module').then(m => m.WcagModule)
  },
  {
    path: 'code-samples',
    loadChildren: () => import('./modules/code-samples/code-samples.module').then(m => m.CodeSamplesModule)
  },
  {
    path: 'links-resources',
    loadChildren: () => import('./modules/links-resources/links-resources.module').then(m => m.LinksResourcesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
