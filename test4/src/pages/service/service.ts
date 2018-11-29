import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Events,ToastController  } from 'ionic-angular';
import {Service} from '../../model/service.model';

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',

  templateUrl: 'service.html',  
})
export class ServicePage {
  public items:any;
  public selected_service:String;
  data: any[];
  
 
  constructor(private toastCtrl: ToastController,public events: Events,public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
   this.data = Service.services;
    
  }
  
  setService(x){
    console.log('Service created!')
    this.events.publish('service:created', x, Date.now());
    
    this.presentToast("Vous avez selectionner " + x);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
