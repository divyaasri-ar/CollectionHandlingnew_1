import { Component } from '@angular/core';
import { BillingService } from '../billing.service';
import { OtpValidationRequest } from 'src/OtpValidationRequest';
import { OtpService } from '../otp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CutomerService } from '../cutomer.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent {
  customers: any[] = [];
  phoneNumber: any;
  otpInput: any;
  otpService: any;
  customerId: any;
  customerDetails: any;
  
  constructor(private route: ActivatedRoute, private customerService: CutomerService, private billingService: BillingService,private router: Router) {
    this.route.params.subscribe(params => {
      // console.log(this.route.queryParams)
      let customer:any = localStorage.getItem("userData");
      console.log(customer)
      this.customerId = customer; // Convert the id parameter to a number
      //this.customersList$ = this.customerService.getAllCustomers();
    });
  }
  
  ngOnInit(): void {
    if (this.customerId) {
      this.customerService.getCustomerById(this.customerId).subscribe(
        (data: any) => {
          this.customerDetails = data; // Store customer details in the variable
        },
        (error: any) => {
          console.error('Error loading customer details:', error);
        }
      );
    } else {
      console.error('Invalid customer ID');
      // Handle the error or show a user-friendly message
    }
}

  logout() {
    this.billingService.logout().subscribe(() => {
      console.log("logout successful");
      window.history.replaceState({}, document.title, '/home');
      window.location.href = '/home'; // You can change the redirect URL as needed
    });
  }

  
}
