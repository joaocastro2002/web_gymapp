import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DropCompararService {

  constructor() { }

  getDropDownText(id, object){
    // filtrar a quantidade d eobjetos com aquele id e ver aquele que selecionamos
    const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.id));
    });
    return selObj;
  }
}