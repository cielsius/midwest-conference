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

  sponsors = [
    { id: 1,
      sponsor_name: 'Sponsor 1',
      contact_name: 'Contact 1',
      sponsor_url: 'url 1',
      contact_email: 'email 1',
      sponsor_level: 'level 1',
      sponsor_description: 'description 1',
      industry: 'industry 1' },
    { id: 2,
      sponsor_name: 'Sponsor 2',
      contact_name: 'Contact 2',
      sponsor_url: 'url 2',
      contact_email: 'email 2',
      sponsor_level: 'level 2',
      sponsor_description: 'description 2',
      industry: 'industry 2' },
    { id: 3,
      sponsor_name: 'Sponsor 3',
      contact_name: 'Contact 3',
      sponsor_url: 'url 3',
      contact_email: 'email 3',
      sponsor_level: 'level 3',
      sponsor_description: 'description 3',
      industry: 'industry 3' }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorsPage');
  }

}