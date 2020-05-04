import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FiisContainerComponent } from './components/fiis-container/fiis-container.component';
import { FiiComponent } from './components/fii/fii.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiisContainerComponent,
    FiiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
