import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from "./service/auth.guard";
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { YourordersComponent } from './components/yourorders/yourorders.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'search/:type', loadChildren: () => import('./quicksearch/quicksearch.module').then(m => m.QuicksearchModule) },
  { path: 'filter/:type', loadChildren: () => import('./filterop/filterop.module').then(m => m.FilteropModule) },
  { path: 'location', loadChildren: () => import('./location/location.module').then(m => m.LocationModule) },
  { path: 'profile',canActivate : [AuthGuard],  component:ProfileComponent },
  { path: 'yourorders',canActivate : [AuthGuard],  component:YourordersComponent },
  { path: 'cart',canActivate : [AuthGuard],  component:CartComponent },
  { path: 'singletsp/:Id',canActivate : [AuthGuard], loadChildren: () => import('./singletsp/singletsp.module').then(m => m.SingletspModule) },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// canActivate: [AuthGuard], for authenticating some routes
