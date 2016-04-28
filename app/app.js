import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

// Content
import {ThingListPage} from './pages/thing-list/thing-list';
// Tests
import {ThingTabsPage} from './pages/thing/thing-tabs/thing-tabs';
// Services
//import {Params} from './services/params';
import {GlobalVars} from './providers/globalVars';

// Dummy content
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';

@App({
  templateUrl: 'build/app.html',
  providers: [[GlobalVars]],
  config: {}
})

class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform], [MenuController], [GlobalVars]];
  }

  constructor(app, platform, menu) {
    this.app = app;
    this.platform = platform;
    this.menu = menu;
    this.globalVar = globalVar;
    this.initializeApp();

    // Set the app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'List Things', component: ThingListPage },
      { title: 'TiverTabsPages', component: ThingTabsPage }
    ];

    // Set the initial page
    this.rootPage = ThingListPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
