import {Page, NavController, NavParams} from 'ionic-angular';
import {ThingService} from '../services/ThingService';
import {ThingTabsPage} from '../thing/thing-tabs/thing-tabs';
import {GlobalVars, setMyGlobalVar} from '../../providers/globalVars';

import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Page({
  templateUrl: 'build/pages/thing-list/thing-list.html',
  providers: [[ThingService], [GlobalVars]]
})

export class ThingListPage {

  static get parameters() {
    return [[NavController], [NavParams], [Http], [GlobalVars]];
  }

  constructor(nav, navParams, http, globalVars) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  	this.http = http;
  	//this.things = null;
    this.globalVar = globalVar;



      
      this.http.get('http://api.themoviedb.org/3/search/river?query=&query=scott&api_key=5fbddf6b517048e25bc3ac1bbeafb919').map(res => res.json()).subscribe(data => {
        this.things = data.things;
        },
      err => {
          console.log("Oops!");
  	});

  }

  itemTapped(event, thing) {
    this.nav.push(ThingTabsPage, {
      thing: thing
    });
    this.globalVars.setMyGlobalVar(thing);
  }
}
