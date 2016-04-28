import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

export class RiverService {
	static get parameters() {
		return [[Http]];
	}

	constructor(http) {
		this.http = http
	}

	//searchRivers(riverName) {
		// var url = 'http://api.themoviedb.org/3/search/river?query=&query=' + encodeURI(riverName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
		//this.response = this.http.get(url).map(res => res.json());
	  //return this.response;
	//}

	
}
