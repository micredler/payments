import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Payments } from 'src/app/interfaces';
import { PaymentsService } from 'src/app/payments.service';

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  form: FormGroup;
  currency: Options[] = [
    { value: 'EUR', viewValue: 'EUR' },
    { value: 'CAD', viewValue: 'CAD' },
    { value: 'GBP', viewValue: 'GBP' },
  ];
  methods: Options[] = [
    { value: '1234', viewValue: 'Viza (*1234)' },
    { value: '5678', viewValue: 'Master (*2137)' },
    { value: '9014', viewValue: 'Diners (*6744)' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentsService
  ) { }

  ngOnInit() {
    const form = this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    const group: PaymentsKey<FormControl> = {
      'name': this.formBuilder.control(null),
      'currency': this.formBuilder.control(null),
      'sum': this.formBuilder.control(null),
      'paymentMethod': this.formBuilder.control(null),
    };
    return new FormGroup(group, { updateOn: 'blur' });
  }

  sendPayments() {
    const paymentReq: Payments = {
      name: this.form.controls['name'].value,
      currency: this.form.controls['currency'].value,
      sum: this.form.controls['sum'].value,
      paymentMethod: this.form.controls['paymentMethod'].value
    };
    this.paymentService.sendPayment(paymentReq).subscribe();
  }
}
export type PaymentsKey<T> = {
  [P in keyof Partial<Payments>]: T;
};


