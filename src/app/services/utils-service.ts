import {Injectable} from "@angular/core";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private datePipe: DatePipe) {
  }

  generateId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  convertDateFormat(inputDate: string): string {
    const dateObj = new Date(inputDate);
    const formattedDate = this.datePipe.transform(dateObj, 'yyyy-MM-dd');
    return formattedDate || '';
  }
}
