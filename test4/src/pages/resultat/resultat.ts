import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
//import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';
import {BaseddProvider} from '../../providers/basedd/basedd';
/**
 * Generated class for the ResultatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultat',
  templateUrl: 'resultat.html',
})
export class ResultatPage {
  public items:any[] = [];
  public currentService:String;

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public _baseddProvider: BaseddProvider,private toastCtrl: ToastController) {
    this.getData();
    events.subscribe('service:created', (x, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.currentService=x;
      console.log('Welcome', x, 'at', time); 
    });
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultatPage');
  }

  getData(){
    let that = this;
    this._baseddProvider.service.subscribe((data)=> {that.items.push(data);},
    (err) => {console.error(err);});
  }

}
