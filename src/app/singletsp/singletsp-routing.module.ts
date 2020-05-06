import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingletspComponent } from './singletsp.component';

const routes: Routes = [{ path: '', component: SingletspComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingletspRoutingModule { }
