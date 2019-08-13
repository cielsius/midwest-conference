import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutSchoolPage } from '../about-school/about-school';
import { ContactPage} from '../contact/contact';
import { DiningPage } from '../dining/dining';
import { FAQPage } from '../FAQ/FAQ';
import { MapPage } from '../map/map';
import { ResourcesPage } from '../resources/resources';
import { SchedulePage } from '../schedule/schedule';
import { SponsorsPage } from '../sponsors/sponsors';
import { ThingsToDoPage } from '../things-to-do/things-to-do';

@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
  styleUrls: ['navigation.html']
})
export class NavigationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  navPage2(){

  }

  navPage3(){

  }

  navPage4(){

  }


  navAboutSchool(){
    this.navCtrl.push(AboutSchoolPage);
  }

  navContactPage(){
    this.navCtrl.push(ContactPage);
  }

  navDiningPage(){
    this.navCtrl.push(DiningPage);
  }

  navFAQPage(){
    this.navCtrl.push(FAQPage);
  }

  navMapPage(){
    this.navCtrl.push(MapPage);
  }

  navResourcesPage(){
    this.navCtrl.push(ResourcesPage);
  }

  navSchedulePage(){
    this.navCtrl.push(SchedulePage);
  }

  navSponsorsPage(){
    this.navCtrl.push(SponsorsPage);
  }

  navThingsToDoPage(){
    this.navCtrl.push(ThingsToDoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

}