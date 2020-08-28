import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProductsComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
