import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DropdownGinasiosService {

  constructor() { }

  // esta função recebe um id e o segundo é o objeto para filtrar
  getDropDownText(id, object){
    // filter vai buscar objetos que correspondem ao id que passamos com o include
    const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.id));
    });
    return selObj;
  }
}
