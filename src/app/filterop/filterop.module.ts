import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilteropRoutingModule } from './filterop-routing.module';
import { FilteropComponent } from './filterop.component';

import { ServiceModule } from "../service/service.module";
import { MaterialarrModule } from "../service/materialarr/materialarr.module";

@NgModule({
  declarations: [FilteropComponent],
  imports: [
    CommonModule,
    FilteropRoutingModule,
    ServiceModule,
    MaterialarrModule
  ]
})
export class FilteropModule { }
