import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Events } from 'ionic-angular';
//import {Service} from '../../model/service.model';
import {BaseddProvider} from '../../providers/basedd/basedd';
//import {ServicePage} from '../../pages/service/service';
import {Service} from '../../model/service.model';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FormulairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulaire',
  templateUrl: 'formulaire.html',
})
export class FormulairePage  {
  
  public currentService:String;
  data: any[];
  constructor(private alertCtrl: AlertController,public events: Events, public http: HttpClient,public navCtrl: NavController, public navParams: NavParams, public _baseddProvider: BaseddProvider,private toastCtrl: ToastController) {
    this.currentService='null';
    this.data = Service.services;
    events.subscribe('service:created', (x, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.currentService=x;
      
      console.log('Welcome', x, 'at', time);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulairePage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      
      subTitle: 'Le formulaire a été envoyer',
      buttons: ['ok']
    });
    alert.present();
  }

  save(){
    var key = this._baseddProvider.save(this.data);
    this.presentAlert();
    if(key)
    { 
      console.log('Service saved')
    }
  }

}
