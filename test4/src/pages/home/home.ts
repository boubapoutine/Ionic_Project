import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { Injectable } from '@angular/core';
import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Injectable()
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private device: Device, private extendedDeviceInformation: ExtendedDeviceInformation) {
  }

  pages = [

    { pageName: "ServicePage", icon: "ios-home", tabTitle: "Newdetail", title: "Services" },


    { pageName: "FormulairePage", icon: "ios-create", tabTitle: "Inbox", title: "Formulaire" },
    { pageName: "ResultatPage", icon: "md-list", tabTitle: "Newdetail", title: "Résultat" },
    { pageName: "DevPage", icon: "ios-people", tabTitle: "help", title: "Développeur" }
  ];

  InfoMemory() {

    let osVersion = "";
    let uuid = "";
    let memory = "";
    let name = "";
    var cpumhz = 0;
    var totalstorage = "";
    var freestorage = 0;

    osVersion = this.device.version;
    uuid = this.device.uuid;
    name = this.device.model;
    memory = this.extendedDeviceInformation.memory;
    cpumhz = this.extendedDeviceInformation.cpumhz;
    totalstorage = this.extendedDeviceInformation.totalstorage;
    freestorage = this.extendedDeviceInformation.freestorage

    let Message = 'Téléphone: ' + name + ' La version du OS est : ' + osVersion + ' UUID : ' + uuid + ' La mémoire est: ' + memory + ' CPU : ' + cpumhz + ' Espace Total: ' + totalstorage + ' Espace libre ' + freestorage;
    let alert = this.alertCtrl.create({
      title: 'Information Memoire',
      subTitle: Message,

      buttons: ['OK']
    });

    alert.present();
  }


  SelectedTabe = 0;
  onTabSelect(ev: any) {
    this.SelectedTabe = ev.index;
  }

}
