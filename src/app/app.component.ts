import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'payment-client';
  constructor(private _router: Router) { }
  payments() {
    this._router.navigate(['payments'])
  }
}
