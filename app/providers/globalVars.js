import {Injectable} from 'angular2/core';

@Injectable()
export class GlobalVars {
  static get parameters(){
    [[GlobalVars]];
  }

  constructor(globalVar) {
    this._vars = [];
  }

  setMyGlobalVar(globalVar) {
    let index = this._vars.indexOf(globalVar);
    if (index > 1) {
        this._vars.splice(index, 1);
    }
    this._vars.push(globalVar);
  }

  getMyGlobalVar() {
    return this.globalVar;
  }

}
