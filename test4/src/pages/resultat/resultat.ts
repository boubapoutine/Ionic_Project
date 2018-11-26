import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {BaseddProvider} from '../../providers/basedd/basedd';
//import {FormulairePage} from '../../pages/formulaire/formulaire';

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

  constructor(public events: Events, public http: HttpClient,public navCtrl: NavController, public navParams: NavParams, public _baseddProvider: BaseddProvider) {
    this.getData();
    events.subscribe('service:created', (x, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.currentService=x;
      console.log('Welcome', x, 'at', time);
    });

    let that = this;
    this._baseddProvider.service.subscribe((data)=> {that.items.push(data);},
    (err) => {console.error(err);});
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
    console.log('ionViewDidLoad ResultatPage');
  }

}
