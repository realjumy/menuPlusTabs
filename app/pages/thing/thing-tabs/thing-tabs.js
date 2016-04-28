import {Page, NavController, NavParams} from 'ionic-angular';

import {ThingInfoTab} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';

import {GlobalVars} from '../../../providers/globalVars';


@Page({
  templateUrl: 'build/pages/thing/thing-tabs/thing-tabs.html'
})
export class ThingTabsPage {
  static get parameters() {
    return [[NavController], [NavParams], [GlobalVars]];
  }


  constructor(nav, navParams) {
    // This takes the information
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.navParams = navParams;
    this.globalVars = globalVars; 
    this.globalVars.getMyGlobalVar();
    //console.log("this.thing");




    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = ThingInfoTab;
    this.tab2Root = Page2;
    this.tab3Root = Page3;
  }
}
