import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//hada asmae 
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 pages = [
  
    {    pageName : "ServicePage" , icon:"ios-home" ,tabTitle:"Newdetail",title:"Services"  },
  
 
  {    pageName : "FormulairePage" , icon:"ios-create",tabTitle:"Inbox",title:"Formulaire"   },
  {    pageName : "ResultatPage" , icon:"md-list" ,tabTitle:"Newdetail",title:"Résultat"  },
   {    pageName : "DevPage" , icon:"ios-people" , tabTitle:"help",title:"Développeur" }
 ];
 SelectedTabe = 0;
 onTabSelect(ev:any){
   this.SelectedTabe = ev.index;
 }

}
