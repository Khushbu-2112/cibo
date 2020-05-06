import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilteropComponent } from './filterop.component';

const routes: Routes = [{ path: '', component: FilteropComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilteropRoutingModule { }
