import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Events,ToastController  } from 'ionic-angular';

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
  
 
  constructor(private toastCtrl: ToastController,public events: Events,public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getData();
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

  setService(x){
    console.log('Service created!')
    this.events.publish('service:created', x, Date.now());
    /*
    this.selected_service=x;
    alert(this.selected_service);*/
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
