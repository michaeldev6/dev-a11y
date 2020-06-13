import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseComponent} from './components/base/base.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageAnnouncerComponent } from './components/page-announcer/page-announcer.component';
import { SkipLinksComponent } from './components/skip-links/skip-links.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { BasePageComponent } from './components/base-page/base-page.component';
import { FontSizerComponent } from './components/font-sizer/font-sizer.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';


const COMPONENTS = [
  BaseComponent,
  BasePageComponent,
  HeaderComponent,
  FontSizerComponent,
  FooterComponent,
  PageAnnouncerComponent,
  SkipLinksComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    FooterNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CoreModule { }
