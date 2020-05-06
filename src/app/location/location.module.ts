import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';

import { ServiceModule } from "../service/service.module";
import { MaterialarrModule } from "../service/materialarr/materialarr.module";

@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    ServiceModule,
    MaterialarrModule
  ]
})
export class LocationModule { }
