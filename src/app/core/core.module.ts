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


const COMPONENTS = [
  BaseComponent,
  BasePageComponent,
  HeaderComponent,
  FooterComponent,
  PageAnnouncerComponent,
  SkipLinksComponent
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
    ...COMPONENTS
  ]
})
export class CoreModule { }
