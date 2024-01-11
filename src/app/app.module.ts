import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomersupportHomeComponent } from './customersupport-home/customersupport-home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PendingcustomerListComponent } from './pendingcustomer-list/pendingcustomer-list.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { HttpClientModule} from '@angular/common/http';
import { NotificationComponent } from './notification/notification.component';
import { AboutlogHtmlComponent } from './aboutlog.html/aboutlog.html.component';
import { AboutcustsupportComponent } from './aboutcustsupport/aboutcustsupport.component';
import { AboutcustComponent } from './aboutcust/aboutcust.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewReceiptComponent } from './view-receipt/view-receipt.component';
import { CardNumberFormatDirective } from './card-number-format.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { GooglePayComponent } from './google-pay/google-pay.component';
import { PaytmComponent } from './paytm/paytm.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { SuccessComponent } from './success/success.component';
import { PaymentInstallmentComponent } from './payment-installment/payment-installment.component';
import { PaymentIssuesComponent } from './payment-issues/payment-issues.component';
import { CustomeroptionsLoginComponent } from './customeroptions-login/customeroptions-login.component';
import { SupportCenterComponent } from './support-center/support-center.component';
import { InstallmentSuccessComponent } from './installment-success/installment-success.component';
import { OptionPaymentComponent } from './option-payment/option-payment.component';
import { OptionPaymentPortalComponent } from './option-payment-portal/option-payment-portal.component';
import { OptionPaymentSuccessComponent } from './option-payment-success/option-payment-success.component';
import { ViewRaisedticketComponent } from './view-raisedticket/view-raisedticket.component';
import { InstallmentPaymentsuccessComponent } from './installment-paymentsuccess/installment-paymentsuccess.component';
import { CustomersupportViewticketComponent } from './customersupport-viewticket/customersupport-viewticket.component';
import { MainissuesComponent } from './mainissues/mainissues.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    AdminComponent,
    CustomerComponent,
    CustomersupportComponent,
    AdminhomeComponent,
    CustomersupportHomeComponent,
    CustomerHomeComponent,
    CustomerListComponent,
    PendingcustomerListComponent,
    PaymentPortalComponent,
    NotificationComponent,
    AboutlogHtmlComponent,
    AboutcustsupportComponent,
    AboutcustComponent,
    ViewReceiptComponent,
    CardNumberFormatDirective,
    GooglePayComponent,
    PaytmComponent,
    PaymentOptionsComponent,
    SuccessComponent,
    PaymentInstallmentComponent,
    PaymentIssuesComponent,
    CustomeroptionsLoginComponent,
    SupportCenterComponent,
    InstallmentSuccessComponent,
    OptionPaymentComponent,
    OptionPaymentPortalComponent,
    OptionPaymentSuccessComponent,
    ViewRaisedticketComponent,
    InstallmentPaymentsuccessComponent,
    CustomersupportViewticketComponent,
    MainissuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
