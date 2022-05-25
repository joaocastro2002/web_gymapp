import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasManagerService {

  constructor() { }

  startAndEndOfWeek(date: Date) {
    const now = date ? new Date(date) : new Date().setHours(0, 0, 0, 0);
    const monday = new Date(now);
    monday.setDate(monday.getDate() - monday.getDay() + 1);
    const sunday = new Date(now);
    sunday.setDate(sunday.getDate() - sunday.getDay() + 7);
    return [monday, sunday];
  }

  getAllWeekDays(date: Date) {
    const [start, end] = this.startAndEndOfWeek(date);
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(new Date(start.getTime() + i * 24 * 60 * 60 * 1000));
    }
    return days;
  }


}
