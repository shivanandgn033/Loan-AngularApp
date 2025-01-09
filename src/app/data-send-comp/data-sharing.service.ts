import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
private messageSource=new BehaviorSubject<any>(null);
currentMessage=this.messageSource.asObservable();

  constructor() { }

  changeMessage(message:string)
  {
     this.messageSource.next(message);
  }
}
