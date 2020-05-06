import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingletspRoutingModule } from './singletsp-routing.module';
import { SingletspComponent } from './singletsp.component';

import { ServiceModule } from "../service/service.module";
import { MaterialarrModule } from "../service/materialarr/materialarr.module";

@NgModule({
  declarations: [SingletspComponent],
  imports: [
    CommonModule,
    SingletspRoutingModule,
    ServiceModule,
    MaterialarrModule
  ]
})
export class SingletspModule { }
