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
    { id: 1,
      sponsor_name: 'Sponsor 1',
      contact_name: 'Contact 1',
      sponsor_url: 'url 1',
      contact_email: 'email 1',
      sponsor_level: 'level 1',
      sponsor_description: 'description 1',
      industry: 'industry 1' }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorPage');
  }

}