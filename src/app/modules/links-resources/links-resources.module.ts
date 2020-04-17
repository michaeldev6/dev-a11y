import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksResourcesComponent } from './pages/links-resources/links-resources.component';
import {LinksResourcesRoutingModule} from './links-resources-routing.module';



@NgModule({
  declarations: [LinksResourcesComponent],
  imports: [
    LinksResourcesRoutingModule,
    CommonModule
  ]
})
export class LinksResourcesModule { }
