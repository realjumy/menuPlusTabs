import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/thing/page1/page1.html'
})
export class ThingInfoTab {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  constructor(nav, navParams) {
    // This takes the information
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    //this.thing = navParams.get('thing');
    //console.log(this.thing);

  }
}
