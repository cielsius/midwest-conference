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
    { id: 1,
      name: 'Event 1',
      description: 'Description 1',
      location: 'Location 1', 
      start_time: 'Start time 1',
      end_time: 'End time 1',
      isChecked: false },
    { id: 2,
      name: 'Event 2',
      description: 'Description 2', 
      location: 'Location 2', 
      start_time: 'Start time 2',
      end_time: 'End time 2',
      isChecked: false },
    { id: 3,
      name: 'Event 3',
      description: 'Description 3', 
      location: 'Location 3', 
      start_time: 'Start time 3',
      end_time: 'End time 3',
      isChecked: false },
    { id: 4,
      name: 'Event 4',
      description: 'Description 4', 
      location: 'Location 4', 
      start_time: 'Start time 4',
      end_time: 'End time 4',
      isChecked: false },
    { id: 5,
      name: 'Event 5',
      description: 'Description 5', 
      location: 'Location 5', 
      start_time: 'Start time 5',
      end_time: 'End time 5',
      isChecked: true}
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}