import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuicksearchRoutingModule } from './quicksearch-routing.module';
import { QuicksearchComponent } from './quicksearch.component';
import { ServiceModule } from '../service/service.module';
import { MaterialarrModule } from "../service/materialarr/materialarr.module";

@NgModule({
  declarations: [QuicksearchComponent],
  imports: [
    CommonModule,
    QuicksearchRoutingModule,
    ServiceModule,
    MaterialarrModule
  ]
})
export class QuicksearchModule { }
