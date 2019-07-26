import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutSchoolPage } from '../about-school/about-school';
import { ContactPage} from '../contact/contact';
import { FAQPage } from '../FAQ/FAQ';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';

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

  navFAQPage(){
    this.navCtrl.push(FAQPage);
  }

  navMapPage(){
    this.navCtrl.push(MapPage);
  }

  navSchedulePage(){
    this.navCtrl.push(SchedulePage);
  }

  events = [
    { name: 'Event 1', isChecked: false },
    { name: 'Event 2', isChecked: false },
    { name: 'Event 3', isChecked: false },
    { name: 'Event 4', isChecked: false },
    { name: 'Event 5', isChecked: true}
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

}