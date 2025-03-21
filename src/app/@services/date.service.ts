import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  //將帶入的日期 轉換 為 YYYY-MM-DD 格式
  changeDateFormat(dateDate: Date, dateType: string = "-") {
    let year;
    let month;
    let date;
    if(dateDate) {
      year = dateDate.getFullYear();
      month = dateDate.getMonth() + 1;
      if (String(month).length == 1) {
        month = "0" + month;
      }
      date = dateDate.getDate();
      if (String(date).length == 1) {
        date = "0" + date;
      }
      return year + dateType + month + dateType + date;
    }else {
      return '';
    }
  }

  constructor() { }
}
