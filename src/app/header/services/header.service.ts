import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  title = new BehaviorSubject('GymApp')

  constructor() { }

  setTitle(title: string) {
    this.title.next(title)
  }
}
