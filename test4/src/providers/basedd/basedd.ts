//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import {ReplaySubject} from 'rxjs/ReplaySubject';

/*
  Generated class for the BaseddProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseddProvider {

  private _service$: any;
  private _db: any;
  private _serviceRef: any;

  constructor() {
    console.log('Hello ServiceProvider Provider');
    this._db = firebase.database().ref('/'); //get a firebase reference to the root
    this._serviceRef = firebase.database().ref('service'); // get a firebase reference to the service
    this._serviceRef.on('child_added', this.handleData, this);  // ***Add this line***
    this._service$ = new ReplaySubject();
  }
  get service(){
    return this._service$;
  }

  handleData(snap){
    // Do something with the data
    try{
      // Tell our observer we have new data
      this._service$.next(snap.val());
    }
    catch(error){
      console.log('catching', error);
    }
    
  }

  save(serv){
    return this._serviceRef.push(serv).key;
  }

}
