import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payments } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  readonly BASE_URL = 'your.url';
  constructor(private httpClient: HttpClient) {
  }

  sendPayment(req: Payments) {
    return this.httpClient.post(`${this.BASE_URL}/sendPay`, req);
  }
}
