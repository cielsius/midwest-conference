import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})
export class ResourcesPage {

  constructor(public navCtrl: NavController) {

  }

  resources = [
    { name: 'Lorem ipsum dolor sit amet?',
      description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { name: 'Ut enim ad minim veniam?',
      description: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    { name: 'Duis aute irure',
      description: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  ];

}