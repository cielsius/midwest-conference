import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NavigationPage } from '../navigation/navigation';
import { SchedulePage } from '../schedule/schedule';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SchedulePage;
  tab3Root = NavigationPage;

  constructor() {

  }
}
