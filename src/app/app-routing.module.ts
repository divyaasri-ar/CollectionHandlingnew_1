import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomersupportHomeComponent } from './customersupport-home/customersupport-home.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PendingcustomerListComponent } from './pendingcustomer-list/pendingcustomer-list.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutlogHtmlComponent } from './aboutlog.html/aboutlog.html.component';
import { AboutcustsupportComponent } from './aboutcustsupport/aboutcustsupport.component';
import { AboutcustComponent } from './aboutcust/aboutcust.component';
import { ViewReceiptComponent } from './view-receipt/view-receipt.component';
import { GooglePayComponent } from './google-pay/google-pay.component';
import { PaytmComponent } from './paytm/paytm.component';
import { SuccessComponent } from './success/success.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { PaymentInstallmentComponent } from './payment-installment/payment-installment.component';
import { PaymentIssuesComponent } from './payment-issues/payment-issues.component';
import { CustomeroptionsLoginComponent } from './customeroptions-login/customeroptions-login.component';
import { SupportCenterComponent } from './support-center/support-center.component';
import { InstallmentSuccessComponent } from './installment-success/installment-success.component';
import { OptionPaymentPortalComponent } from './option-payment-portal/option-payment-portal.component';
import { OptionPaymentSuccessComponent } from './option-payment-success/option-payment-success.component';
import { ViewRaisedticketComponent } from './view-raisedticket/view-raisedticket.component';
import { InstallmentPaymentsuccessComponent } from './installment-paymentsuccess/installment-paymentsuccess.component';
import { CustomersupportViewticketComponent } from './customersupport-viewticket/customersupport-viewticket.component';
import { MainissuesComponent } from './mainissues/mainissues.component';

const routes: Routes = [
  {path:'',
  component:HomepageComponent},
  {
    path:'home',
    component:HomepageComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'adminlogin',
    component:AdminComponent
  },
  {
    path:'customersupportlogin',
    component:CustomersupportComponent
  },
  {
    path:'customerlogin',
    component:CustomerComponent
  },
  {
    path:'admin/home',
    component:AdminhomeComponent
  },
  {
    path:'customer/home',
    component:CustomerHomeComponent
  },
  {
    path:'customersupport/home',
    component:CustomersupportHomeComponent
  },
  {
    path:'customerlist',
    component:CustomerListComponent
  },
  {
    path:'pendingcustomerlist',
    component:PendingcustomerListComponent
  },
  {
    path:'paymentportal',
    component:PaymentPortalComponent
  },
  {
    path:'notification',
    component:NotificationComponent
  },
  {
    path:'aboutlog',
    component:AboutlogHtmlComponent
  },
  {
    path:'aboutcustsupport',
    component:AboutcustsupportComponent
  },
  {
    path:'aboutcust',
    component:AboutcustComponent
  },
  {
    path:'viewbill',
    component:ViewReceiptComponent
  },
  {
    path:'google-pay',
    component:GooglePayComponent
  },
  {
    path:'paytm',
    component:PaytmComponent
  },
  {
    path: 'success',
    component: SuccessComponent,
    //data: { message: 'Congratulations! Your bill has been paid.' }
  },
  {
    path:'paymentoptions',
    component:PaymentOptionsComponent
  },
  {
    path:'paymentinstallment',
    component:PaymentInstallmentComponent
  },
  {
    path:'paymentissues',
    component:PaymentIssuesComponent
  },
  {
    path:'customeroptionslogin',
    component:CustomeroptionsLoginComponent
  },
  {
    path:'supportcenter',
    component:SupportCenterComponent
  },
  {
    path:'installmentsuccess',
    component:InstallmentSuccessComponent
  },
  {
    path:'optionpaymentportal',
    component:OptionPaymentPortalComponent
  },
  {
    path:'optionpaymentsuccess',
    component:OptionPaymentSuccessComponent
  },
  {
    path:'viewraisedticket',
    component:ViewRaisedticketComponent
  },
  {
    path:'installmentpaymentsuccess',
    component:InstallmentPaymentsuccessComponent
  },
  {
    path:'customersupportviewticket',
    component:CustomersupportViewticketComponent
  },
  {
    path:'mainissue',
    component:MainissuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
