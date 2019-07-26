import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutSchoolPage } from '../pages/about-school/about-school';
import { ContactPage } from '../pages/contact/contact';
import { FAQPage } from '../pages/FAQ/FAQ';
import { HomePage } from '../pages/home/home';
import { LockScreenPage } from '../pages/lock-screen/lock-screen';
import { MapPage } from '../pages/map/map';
import { NavigationPage } from '../pages/navigation/navigation';
import { SchedulePage } from '../pages/schedule/schedule';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutSchoolPage,
    ContactPage,
    FAQPage,
    HomePage,
    LockScreenPage,
    MapPage,
    NavigationPage,
    SchedulePage,
    TabsPage
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
    FAQPage,
    HomePage,
    LockScreenPage,
    MapPage,
    NavigationPage,
    SchedulePage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
