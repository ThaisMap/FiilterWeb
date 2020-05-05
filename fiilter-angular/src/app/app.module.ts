import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from "primeng/table";
import { SliderModule } from "primeng/slider";
import {  MultiSelectModule } from "primeng/multiselect";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FiisContainerComponent } from './components/fiis-container/fiis-container.component';
import { FiiComponent } from './components/fii/fii.component';
import { FiisTableComponent } from './components/fiis-table/fiis-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiisContainerComponent,
    FiiComponent,
    FiisTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    TableModule,
    SliderModule,
    MultiSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
