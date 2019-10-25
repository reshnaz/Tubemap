import { Injectable } from '@angular/core';
import _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  hRandomIndex;

  halton(index, base) {
  var result = 0;
  var f = 1 / base;
  var i = index;
  while(i > 0) {
    result = result + f * (i % base);
    i = Math.floor(i / base);
    f = f / base;
  }
  return result;
};
hRandom(min, max){
  if (this.hRandomIndex === undefined) {this.hRandomIndex = 0;}
  var h = this.halton(this.hRandomIndex, 3);
  var rand = h * (max-min) + min;

  this.hRandomIndex++;

  return rand;
};
floorToNearest(num, nearest){
  return nearest * Math.floor(num/nearest);
};
localStore(key){
  if (!localStorage) return false;

  return JSON.parse(localStorage.getItem(key));
};
localStoreRemove(key){
  if (!localStorage) return false;

  localStorage.removeItem(key);
};
localStoreSet(key, value){
  if (!localStorage) return false;

  localStorage.setItem(key, JSON.stringify(value));
};
parameterize(str){
  return str.trim().replace(/[^a-zA-Z0-9-\s]/g, '').replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
};
parseQueryString(queryString){
  var params = {};
  if(queryString){
    _.each(
      _.map(decodeURI(queryString).split(/&/g),(el,i)=>{
        var aux = el.split('='), o = {};
        if(aux.length >= 1){
          var val = undefined;
          if(aux.length == 2)
            val = aux[1];
          o[aux[0]] = val;
        }
        return o;
      }),
      (o)=>{
        _.extend(params,o);
      }
    );
  }
  return params;
};
randomString(length){
  var text = "",
      alpha = "abcdefghijklmnopqrstuvwxyz",
      alphanum = "abcdefghijklmnopqrstuvwxyz0123456789",
  length = length || 8;
  for( var i=0; i < length; i++ ) {
    if ( i <= 0 ) { // must start with letter
      text += alpha.charAt(Math.floor(Math.random() * alpha.length));
    } else {
      text += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
    }
  }
  return text;
};
round(num, dec) {
  num = parseFloat( num );
  dec = dec || 0;
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
};
roundToNearest(num, nearest){
  return nearest * Math.round(num/nearest);
};
token(){
  return Math.random().toString(36).substr(2);
};

}
