import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {SuperTabsModule} from 'ionic2-super-tabs';

import {HttpModule } from '@angular/http'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseddProvider } from '../providers/basedd/basedd';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    SuperTabsModule.forRoot()
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseddProvider
  ]
})
export class AppModule {}
