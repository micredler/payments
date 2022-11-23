import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments/payments/payments/payments.component';



const routes: Routes = [
  { path: 'payments', component: PaymentsComponent },
  {
    path: '', redirectTo: '/payments',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
