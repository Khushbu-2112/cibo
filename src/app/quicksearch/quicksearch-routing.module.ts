import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuicksearchComponent } from './quicksearch.component';

const routes: Routes = [{ path: '', component: QuicksearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuicksearchRoutingModule { }
