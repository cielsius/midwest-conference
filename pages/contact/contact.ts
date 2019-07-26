import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  contacts = [
    { id: 1,
      name: 'Contact 1', 
      email: 'contact1@email.com',
      position: 'role 1',
      phone: '123-456-7890'},
    { id: 2,
      name: 'Contact 2',
      email: 'contact2@email.com',
      position: 'role 2',
      phone: '123-456-7890'},
    { id: 3,
      name: 'Contact 3',
      email: 'contact3@email.com',
      position: 'role 3',
      phone: '123-456-7890'},
    { id: 4,
      name: 'Contact 4',
      email: 'contact4@email.com',
      position: 'role 4',
      phone: '123-456-7890'},
    { id: 5,
      name: 'Contact 5',
      email: 'contact5@email.com',
      position: 'role 5',
      phone: '123-456-7890'}
  ];

}
