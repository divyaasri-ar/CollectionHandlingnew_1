import { Component } from '@angular/core';
import { BillingService } from '../billing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customersupport-home',
  templateUrl: './customersupport-home.component.html',
  styleUrls: ['./customersupport-home.component.css']
})
export class CustomersupportHomeComponent {
  constructor(private billingService: BillingService, private router: Router) { }

  logout() {
    this.billingService.logout().subscribe(() => {
      console.log("logout successful");
      window.history.replaceState({}, document.title, '/home');
      window.location.href = '/home'; // You can change the redirect URL as needed
    });
  }


}
