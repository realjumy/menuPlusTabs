import {Injectable} from 'angular2/core';

@Injectable()
export class Params{
  constructor (){
      console.log("Params()");
      this.params={};
  }
}
