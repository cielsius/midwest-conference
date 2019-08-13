import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LockScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lock-screen',
  templateUrl: 'lock-screen.html',
  })

  export class LockScreenPage {
  public login_password:any;

  checkPassword() {
    if (this.login_password == 'midwestisbest') {
      this.navCtrl.setRoot(TabsPage);
    }
    else {
      alert('Password incorrect, please try again');
    }
  }

  optionsFn():void {//here item is an object 
    console.log(this.Conference);
  }

  options = [
    {"name": 'Central',
      "password": ' '},
    {"name": 'Midwest',
      "password": 'midwestisbest'},
    {"name": 'North Atlantic',
      "password": ' '},
    {"name": 'Southeast',
      "password": ' '},
    {"name": 'West',
      "password": ' '}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockScreenPage');
  }

}