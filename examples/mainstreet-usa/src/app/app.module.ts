import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

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
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
