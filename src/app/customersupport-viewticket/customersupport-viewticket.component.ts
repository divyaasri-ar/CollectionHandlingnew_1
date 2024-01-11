import { Component } from '@angular/core';
import { BillingService } from '../billing.service';
import { CustomerSupportTicket } from 'src/CustomerSupportTicket';
import { ActivatedRoute, Router } from '@angular/router';
import { CutomerService } from '../cutomer.service';
import { FormBuilder } from '@angular/forms';
import { Ticket } from 'src/Ticket';

@Component({
  selector: 'app-customersupport-viewticket',
  templateUrl: './customersupport-viewticket.component.html',
  styleUrls: ['./customersupport-viewticket.component.css']
})
export class CustomersupportViewticketComponent {
  tickets: any[] = [];
  ticket: CustomerSupportTicket[] = [];
  paymentAmount: number = 0;
  customerId: any;
  customerDetails: any;
  id: any;
  CSticket: CustomerSupportTicket = {
    customerId:0,
    selectedIssue: '',
    otherIssue: '',
    email: '',
   
  };


  constructor(private route: ActivatedRoute,
    private customerService: CutomerService,
    private billingService: BillingService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.route.params.subscribe(params => {
      let customer: any = localStorage.getItem('userData');
      console.log(customer);
      this.customerId = customer; // Convert the id parameter to a number
    });
   }

  // ngOnInit(): void {
  //   this.loadCustomers();
  // }
  ngOnInit(): void {
    this.loadCustomers();
    if (this.customerId) {
      this.customerService.getCustomerById(this.customerId).subscribe(
        (data: any) => {
          this.customerDetails = data; // Store customer details in the variable
          this.id=this.customerDetails.id;
  
            console.log(this.customerDetails.id);
  
        },
        (error: any) => {
          console.error('Error loading customer details:', error);
        }
      );
    } else {
      console.error('Invalid customer ID');
     
    }
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


  issuesresolved(ticket: any): void {
    if (this.customerId !== undefined) {
      this.CSticket.customerId=this.customerDetails.id;
    this.billingService.deleteCustomerFromTicketDatabase(this.customerId).subscribe(Response => {
      console.log("success deleted", Response);
      
       
  });

      this.billingService.deleteCustomerFromCSTicketDatabase(this.customerId).subscribe(deleteResponse => {
          console.log("success deleted", deleteResponse);
           
      });
      alert('Customer issue resolved');
  }
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

  // issuesresolved(ticket: CustomerSupportTicket): void {
  //   this.billingService.deleteCustomerSupportTicket(ticket.customerId).subscribe(
  //     () => {
  //       console.log('Ticket resolved and deleted successfully.');
  //       // Handle success, maybe refresh the tickets list or show a success message
  //       this.removeTicketFromList(ticket); // Optionally, remove the ticket from the local list
  //       console.log("deleted successfully")
  //     },
  //     error => {
  //       console.error('Error resolving ticket:', error);
  //       // Handle error, show an error message to the user
  //     }
  //   );
  // }

  // private removeTicketFromList(ticket: CustomerSupportTicket): void {
  //   const index = this.tickets.indexOf(ticket);
  //   if (index !== -1) {
  //     this.tickets.splice(index, 1);
  //   }
  // }


}
