import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutSchoolPage } from '../pages/about-school/about-school';
import { ContactPage } from '../pages/contact/contact';
import { DiningPage } from '../pages/dining/dining';
import { FAQPage } from '../pages/FAQ/FAQ';
import { HomePage } from '../pages/home/home';
import { LockScreenPage } from '../pages/lock-screen/lock-screen';
import { MapPage } from '../pages/map/map';
import { NavigationPage } from '../pages/navigation/navigation';
import { ResourcesPage } from '../pages/resources/resources';
import { SchedulePage } from '../pages/schedule/schedule';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { TabsPage } from '../pages/tabs/tabs';
import { ThingsToDoPage } from '../pages/things-to-do/things-to-do';

@NgModule({
  declarations: [
    MyApp,
    AboutSchoolPage,
    ContactPage,
    DiningPage,
    FAQPage,
    HomePage,
    LockScreenPage,
    MapPage,
    NavigationPage,
    ResourcesPage,
    SchedulePage,
    SponsorsPage,
    TabsPage,
    ThingsToDoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutSchoolPage,
    ContactPage,
    DiningPage,
    FAQPage,
    HomePage,
    LockScreenPage,
    MapPage,
    NavigationPage,
    ResourcesPage,
    SchedulePage,
    SponsorsPage,
    TabsPage,
    ThingsToDoPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
