import { Component, OnInit } from '@angular/core';
import { OtpService } from '../otp.service';
import { pendcustomer } from 'src/pendcustomer';
import { BillingService } from '../billing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendingcustomer-list',
  templateUrl: './pendingcustomer-list.component.html',
  styleUrls: ['./pendingcustomer-list.component.css']
})
export class PendingcustomerListComponent implements OnInit {
  // customers: any[] = [];
  customers: pendcustomer[] | undefined;

  constructor(private otpService: OtpService, private billingService: BillingService, private router: Router) { }

  
  // ngOnInit(): void {
  //   this.otpService.getAllCustomers().subscribe(data => {
  //     this.customers = data;
  //   });

  // }
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.otpService.getAllCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  sendEmailToCustomer(customer: pendcustomer): void {
    this.otpService.sendEmailToCustomer(customer.id).subscribe(response => {
      console.log(response); // Handle the response as needed
      // Optionally, you can update the customer status or show a notification to the user
    });
  }
  logout() {
    this.billingService.logout().subscribe(() => {
      console.log("logout successful");
      window.history.replaceState({}, document.title, '/home');
      window.location.href = '/home'; // You can change the redirect URL as needed
    });
  }
}
