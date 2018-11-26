import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicePage } from './service';
//import {FormulairePage} from '../../pages/formulaire/formulaire';

@NgModule({
  declarations: [
    ServicePage
  ],
  imports: [
    IonicPageModule.forChild(ServicePage),
  ],
})
export class ServicePageModule {}
