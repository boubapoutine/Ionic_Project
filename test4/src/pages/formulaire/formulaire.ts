import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Events } from 'ionic-angular';

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
  

  public items:any;
  public currentService:String;



  constructor(public events: Events,public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getData();
    events.subscribe('service:created', (x, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.currentService=x;
      console.log('Welcome', x, 'at', time);
    });
  }

  getData(){
    let url = 'assets/Data/service.json';
    //let url = 'https://jsonplaceholder.typicode.com/photos';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      
      this.items = result.services;
      console.log(result.services);
  
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulairePage');
  }

  
}
