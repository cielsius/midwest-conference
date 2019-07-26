import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
  styleUrls: ['sponsors.html']
})
export class SponsorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sponsor = [
    { name: 'Event 1' },
    { name: 'Event 2' },
    { name: 'Event 3' },
    { name: 'Event 4' },
    { name: 'Event 5' }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}