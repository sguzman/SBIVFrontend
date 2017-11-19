import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import {MaterialModule} from '../module/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MapsComponent } from './maps/maps.component';
import { ChartsComponent } from './charts/charts.component';
import { ListComponent } from './list/list.component';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    MapsComponent,
    ChartsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADOSXXuKP-ZqWtGR3k4wKwdniWEzAlnhM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
