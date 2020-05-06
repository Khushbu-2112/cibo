import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

import { ServiceModule } from "./service/service.module";
import { MaterialarrModule } from "./service/materialarr/materialarr.module";
import { ReactiveFormsModule } from "@angular/forms";
import { LogindailogComponent } from './shared/logindailog/logindailog.component';
import { RegisterdialogComponent } from './shared/registerdialog/registerdialog.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { YourordersComponent } from './components/yourorders/yourorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LogindailogComponent,
    RegisterdialogComponent,
    HomeComponent,
    NotfoundComponent,
    ProfileComponent,
    CartComponent,
    YourordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceModule,
    ReactiveFormsModule,
    MaterialarrModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LogindailogComponent,RegisterdialogComponent]
})
export class AppModule { }
