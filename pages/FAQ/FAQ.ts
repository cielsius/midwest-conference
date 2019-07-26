import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-FAQ',
  templateUrl: 'FAQ.html'
})
export class FAQPage {

  constructor(public navCtrl: NavController) {

  }

  public newQuestion:any;

  handleAskedQuestion() {
    this.newQuestion="Thank you! We will get back to you soon!";
  }

  faqs = [
    { question: 'Lorem ipsum dolor sit amet?',
      answer: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { question: 'Ut enim ad minim veniam?',
      answer: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    { question: 'Duis aute irure',
      answer: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  ];

}