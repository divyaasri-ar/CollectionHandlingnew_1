import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Installment } from 'src/Installment';
import { OtpValidationRequest } from 'src/OtpValidationRequest';
import { Ticket } from 'src/Ticket';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private apiUrl= 'localhost:8770/api/admin/login'

  constructor(private http: HttpClient) { }

  // login(email:string, password: string)
  // {
  //   return this.http.post<string>("http://localhost:8770/api/admin/login?email="+email+"&password="+password,email);
  // }
  login(email: string, password: string): Observable<string> {
    const body = { email, password }; // create an object with email and password properties
    return this.http.post<string>(`http://localhost:8770/api/admin/login`, body);
  }        
  
  loginCs(email: string, password: string): Observable<string> {
    const body = { email, password }; // create an object with email and password properties
    return this.http.post<string>(`http://localhost:8770/api/custsupport/login`, body);
  }   

  private baseUrl = 'http://localhost:8770/api/customers';

  getAllCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  private ticketUrl = 'http://localhost:8770';
  getAllTickets(): Observable<any> {
    return this.http.get(`${this.ticketUrl}/all/ticket`);
  }
  sendTicketToCustomerSupport(ticket: any): Observable<any> {
    return this.http.post<any>(`${this.ticketUrl}/ticket`,ticket);
  }

  deleteCustomerSupportTicket(id: number): Observable<void> {
    const url = `${this.ticketUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  private payUrl = 'http://localhost:8770/api/customers/pending';
  processPayment(paymentDetails: any): Observable<any> {
    // Assuming your API endpoint for processing payments is 'this.apiUrl + '/payments'
    return this.http.post<any>(this.payUrl + '/payments', paymentDetails);
  }
  private aUrl = 'http://localhost:8770/api/customers';
  
  makePayment(customerId: number, paymentAmount: number): Observable<any> {
    const paymentDetails = {
      customerId: customerId,
      amount: paymentAmount
    };

    // Make an HTTP POST request to your API endpoint for processing payments
    return this.http.post<any>(`${this.aUrl}/payments`, paymentDetails);
  }

  getPendingCustomers(): Observable<any> {
    return this.http.get<any>(this.payUrl);
  }
  getOutstandingBill(customerId: number): Observable<number> {
    const outstandingBillUrl = `${this.aUrl}/${customerId}/outstanding-bill`;
    return this.http.get<number>(outstandingBillUrl);
  }
  private pUrl = 'http://localhost:8770/api/customers';
  updateCustomerStatus(customerId: number): Observable<any> {
    // Make HTTP request to update customer status to 'paid'
    return this.http.post(`${this.pUrl}/${customerId}/process`,customerId);
  }
  optupdateCustomerStatus(customerId: number): Observable<any> {
    // Make HTTP request to update customer status to 'paid'
    return this.http.post(`${this.pUrl}/${customerId}/optprocess`,customerId);
  }
  optupdateCustomerFromPendingDatabase(customerId: number): Observable<any> {
    // Make HTTP request to update customer status to 'paid'
    return this.http.post(`${this.pUrl}/${customerId}/optupdateprocess`,customerId);
  }

  private dUrl = 'http://localhost:8770';
  deleteCustomerFromPendingDatabase(customerId: any): Observable<any> {
    // Make HTTP request to delete customer from pending database
    return this.http.post(`${this.dUrl}/delete/${customerId}`,customerId);
  }
  deleteCustomerFromRaiseTicket(customerId: any): Observable<any> {
    // Make HTTP request to delete customer from pending database
    return this.http.post(`${this.dUrl}/ticketdelete/${customerId}`,customerId);
  }
  checkCustomerInTicketDatabase(customerId: number): Observable<any> {
    const url = `${this.dUrl}/checkCustomer/${customerId}`; // Replace 'checkCustomer' with your actual endpoint
    return this.http.get(url);
  }
  deleteCustomerFromTicketDatabase(customerId: any): Observable<any> {
    // Make HTTP request to delete customer from pending database
    return this.http.post(`${this.dUrl}/ticketdelete/${customerId}`,customerId);
  }
  deleteCustomerFromCSTicketDatabase(customerId: any): Observable<any> {
    // Make HTTP request to delete customer from pending database
    return this.http.post(`${this.dUrl}/csticketdelete/${customerId}`,customerId);
  }


  private optUrl = 'http://localhost:8770'; 
  calculateInstallmentAmounts(requestBody: any): Observable<any> {
    // const url = `${this.optUrl}/calculate-installment`;
    // return this.http.post<number[]>(url, requestBody);
    return this.http.post(`${this.optUrl}/calculate-installment`,requestBody);
  }

  saveInstallment(installment: Installment): Observable<Installment> {
    const url = `${this.optUrl}/api/installments`;
    return this.http.post<Installment>(url, installment);
  }

  saveTicket(ticket: Ticket): Observable<Ticket> {
    const url = `${this.optUrl}/api/ticket`;
    return this.http.post<Ticket>(url, ticket);
  }


  private cUrl = 'http://localhost:8770'; 
  getCustomerData(): Observable<any> {
    // Assume you have an API endpoint /customer or similar to fetch customer data
    return this.http.get<any>(`${this.optUrl}/all`);
  }

  
  private epiUrl = 'http://localhost:8770'; 
  
  sendEmailToPendingCustomer(customerId: number): Observable<any> {
    return this.http.post(`${this.epiUrl}/pendingemail/${customerId}`, null);
  }

  sendEmailToPaymentCustomer(customerId: number): Observable<any> {
    console.log(customerId);
    return this.http.post(`${this.epiUrl}/api/customers/paymentemail/${customerId}`, null);
  }
  optsendEmailToPaymentCustomer(customerId: number): Observable<any> {
    console.log(customerId);
    return this.http.post(`${this.epiUrl}/api/customers/optpaymentemail/${customerId}`, null);
  }

  sendEmailToTicketCustomer(customerId: number): Observable<any> {
    return this.http.post(`${this.epiUrl}/ticketemail/${customerId}`, null);
  }



  private lpiUrl = 'http://localhost:8770'; 
  logout() {
    return this.http.post(`${this.lpiUrl}/api/logout`, {});
  }


  // processPayment(customerId: number, paymentAmount: number): Observable<void> {
  //   const processPaymentUrl = `${this.aUrl}/${customerId}/process-payment`;
  //   const paymentDetails = {
  //     amount: paymentAmount
  //   };
  //   return this.http.post<void>(processPaymentUrl, paymentDetails);
  // }


  // generateOTP(phoneNumber: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/generate-otp`, phoneNumber);
  // }

  // verifyOTP(phoneNumber: string, otp: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/verify-otp`, { phoneNumber, otp });
  // }
  // login(adlog:any)

  // {

  //   return this.http.post<string>(`${this.apiUrl}`,+"/login",adlog);

  // }
}
