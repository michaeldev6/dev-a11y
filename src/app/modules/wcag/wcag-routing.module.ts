import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WcagComponent} from './pages/wcag/wcag.component';
import {WcagItemComponent} from './pages/wcag-item/wcag-item.component';
import {WcagItemResolver} from './resolvers/wcag-item.resolver';

const routes: Routes = [
	{
		path: '',
		component: WcagComponent,
		pathMatch: 'full'
	},
	{
		path: ':id',
		component: WcagItemComponent,
		resolve: {
			wcagItem: WcagItemResolver
		}
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcagRoutingModule { }
