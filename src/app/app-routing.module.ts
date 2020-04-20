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
    path: 'aria',
    loadChildren: () => import('./modules/aria/aria.module').then(m => m.AriaModule)
  },
  {
    path: 'code-samples',
    loadChildren: () => import('./modules/code-samples/code-samples.module').then(m => m.CodeSamplesModule)
  },
  {
    path: 'screen-readers',
    loadChildren: () => import('./modules/screen-readers/screen-readers.module').then(m => m.ScreenReadersModule)
  },
  {
    path: 'links-resources',
    loadChildren: () => import('./modules/links-resources/links-resources.module').then(m => m.LinksResourcesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
