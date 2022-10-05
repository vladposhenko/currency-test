import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { CurrencyRowComponent } from './components/currency-row/currency-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
