import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TrolleyComponent } from './attr/trolley/trolley.component';
import { DapperDansComponent } from './attr/dapper-dans/dapper-dans.component';
import { MisiComponent } from './attr/misi/misi.component';
import { CitizensComponent } from './attr/citizens/citizens.component';
import { MenuComponent } from './menu/menu.component';
import { IntroComponent } from './intro/intro.component';

import { AppRoutingModule } from './app-routing.module';
import { MrffComponent } from './attr/mrff/mrff.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { AboutTextComponent } from './about-text/about-text.component';

@NgModule({
  declarations: [
    HomeComponent,
    TrolleyComponent,
    DapperDansComponent,
    MisiComponent,
    CitizensComponent,
    MenuComponent,
    IntroComponent,
    MrffComponent,
    AddScheduleComponent,
    AboutTextComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
