import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['schedule.html']
})
export class SchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  events = [
    { name: 'Event 1', isChecked: false },
    { name: 'Event 2', isChecked: false },
    { name: 'Event 3', isChecked: false },
    { name: 'Event 4', isChecked: false },
    { name: 'Event 5', isChecked: true}
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}