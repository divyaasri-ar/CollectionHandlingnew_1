import { Component } from '@angular/core';
import { BillingService } from '../billing.service';
import { Ticket } from 'src/Ticket';

@Component({
  selector: 'app-view-raisedticket',
  templateUrl: './view-raisedticket.component.html',
  styleUrls: ['./view-raisedticket.component.css']
})
export class ViewRaisedticketComponent {
  tickets: any[] = [];
  paymentAmount: number = 0;


  constructor(private billingService: BillingService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.billingService.getAllTickets().subscribe(
      data => {
        this.tickets = data;
      },
      error => {
        console.error('Error loading customers:', error);
      }
    );
  }

  // sendTicketToCustomerSupport(customer: Ticket): void {
  //   this.billingService.sendTicketToCustomerSupport(customer.customerId).subscribe(response => {
  //     console.log(response); 
  //   });
  // }
  sendTicketToCustomerSupport(ticket: any): void {
    this.billingService.sendTicketToCustomerSupport(ticket).subscribe(
      response => {
        console.log('Ticket sent to customer support successfully:', response);
        // Handle success, maybe show a success message to the admin user
        alert('Issues forwarded to Customer Support');
      },
      error => {
        console.error('Error sending ticket to customer support:', error);
        // Handle error, show an error message to the admin user
      }
    );
  }

  makePayment(customerId: number): void {
    if (this.paymentAmount <= 0) {
      alert('Invalid payment amount.');
      return;
    }

    this.billingService.makePayment(customerId, this.paymentAmount).subscribe(
      (      response: any) => {
        console.log('Payment successful:', response);
        // Optionally, update the UI or navigate to another page upon successful payment
        this.loadCustomers(); // Reload customers after payment
      },
      (      error: any) => {
        console.error('Error making payment:', error);
        alert('Error making payment. Please try again later.');
      }
    );
  }
  logout() {
    this.billingService.logout().subscribe(() => {
      console.log("logout successful");
      window.history.replaceState({}, document.title, '/home');
      window.location.href = '/home'; // You can change the redirect URL as needed
    });
  }
}