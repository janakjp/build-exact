import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrdersHelperService {

  private subject = new Subject<any>();

  sendNumber(orderNumber: string) {
      this.subject.next({ orderNumber: orderNumber });
  }

  getNumber(): Observable<any> {
      return this.subject.asObservable();
  }
}
