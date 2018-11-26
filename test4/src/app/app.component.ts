import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SuperTabsModule} from 'ionic2-super-tabs';

import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   
    platform.ready().then(() => {
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    const config = {
      apiKey: "AIzaSyBi5LjtpJM22VoabNhm_M7Ds7Q6zPw8UIw",
      authDomain: "test4-6b8bb.firebaseapp.com",
      databaseURL: "https://test4-6b8bb.firebaseio.com",
      projectId: "test4-6b8bb",
      storageBucket: "test4-6b8bb.appspot.com",
      messagingSenderId: "189975205006"
    };
    firebase.initializeApp(config);
  }
}

