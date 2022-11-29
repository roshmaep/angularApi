import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerviewComponent } from './passengerview/passengerview.component';
import { UpublicdataComponent } from './upublicdata/upublicdata.component';
import { PublicapiComponent } from './publicapi/publicapi.component';
import { ProductComponent } from './product/product.component';
import { UserdataComponent } from './userdata/userdata.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerviewComponent,
    UpublicdataComponent,
    PublicapiComponent,
    ProductComponent,
    UserdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
