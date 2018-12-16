import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url = 'https://tinhte.vn/';

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
    const browser = this.iab.create(this.url);
    browser.show();
  }

}
