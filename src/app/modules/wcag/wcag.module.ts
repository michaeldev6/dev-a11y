import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcagComponent } from './pages/wcag/wcag.component';
import {WcagRoutingModule} from './wcag-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { WcagListFilterComponent } from './components/wcag-list-filter/wcag-list-filter.component';
import { WcagListComponent } from './components/wcag-list/wcag-list.component';



@NgModule({
	declarations: [
		WcagComponent,
		WcagListFilterComponent,
		WcagListComponent,
	],
	imports: [
		WcagRoutingModule,
		CommonModule,
		SharedModule,
	]
})
export class WcagModule { }
