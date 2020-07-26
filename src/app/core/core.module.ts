import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageAnnouncerComponent } from './components/page-announcer/page-announcer.component';
import { SkipLinksComponent } from './components/skip-links/skip-links.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { FontSizerComponent } from './components/font-sizer/font-sizer.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';


const COMPONENTS = [
	HeaderComponent,
	FontSizerComponent,
	FooterComponent,
	FooterNavComponent,
	PageAnnouncerComponent,
	SkipLinksComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
	exports: [
		...COMPONENTS,
	]
})
export class CoreModule { }
