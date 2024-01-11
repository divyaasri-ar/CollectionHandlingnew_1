import { Component } from '@angular/core';
import { BillingService } from '../billing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  location: any;
  constructor(private billingService: BillingService, private router: Router) { }
  logout() {
    this.billingService.logout().subscribe(() => {
      console.log("logout successful");
      // Navigate to the desired route after logout (for example, login page)
      this.router.navigate(['/home']); // Replace 'login' with your desired route
      // Replace the current entry in the history with the new URL
      this.location.replaceState('/home'); // Replace '/login' with your desired route path
    });
  }
}
