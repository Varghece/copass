import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignedCrewComponent } from './assigned-crew/assigned-crew.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { BasicInformarionComponent } from './basic-informarion/basic-informarion.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { PancardComponent } from './pancard/pancard.component';
import { AadharCardComponent } from './aadhar-card/aadhar-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RecentlycompletedComponent } from './assigned-crew/recentlycompleted/recentlycompleted.component';
import { AssignedtoMeComponent } from './assigned-crew/assignedto-me/assignedto-me.component';
import { CreditDisbAuthComponent } from './credit-disb-auth/credit-disb-auth.component';
import { ViewEditComponent } from './view-edit/view-edit.component';
import { AddressProofComponent } from './address-proof/address-proof.component';
import { MemberShipComponent } from './member-ship/member-ship.component';
import { IncomeProofComponent } from './income-proof/income-proof.component';
import { EmploymentComponent } from './employment/employment.component';
import { BankComponent } from './bank/bank.component';
import { ExistingLoanComponent } from './existing-loan/existing-loan.component';
import { PropertyComponent } from './property/property.component';
import { FirstQltyCheckComponent } from './view-edit/first-qlty-check/first-qlty-check.component';
import { SecondQltyCheckComponent } from './view-edit/second-qlty-check/second-qlty-check.component';
import { FinalQltyCheckComponent } from './view-edit/final-qlty-check/final-qlty-check.component';
import { CustomerInteractionComponent } from './view-edit/customer-interaction/customer-interaction.component';
import { VerificationProcessComponent } from './view-edit/verification-process/verification-process.component';
import { ValidationSignoffComponent } from './view-edit/validation-signoff/validation-signoff.component';
import { CunderWritingComponent } from './view-edit/cunder-writing/cunder-writing.component';
import { CreditSanctionComponent } from './view-edit/credit-sanction/credit-sanction.component';
import { LoanDocExeComponent } from './view-edit/loan-doc-exe/loan-doc-exe.component';
import { LoanDocvalidSignoffComponent } from './view-edit/loan-docvalid-signoff/loan-docvalid-signoff.component';
import { CreditDisburseComponent } from './view-edit/credit-disburse/credit-disburse.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    AppComponent,
    AssignedCrewComponent,
    HeaderNavComponent,
    BasicInformarionComponent,
    NewCustomerComponent,
    PancardComponent,
    AadharCardComponent,
    SideBarComponent,
    RecentlycompletedComponent,
    AssignedtoMeComponent,
    CreditDisbAuthComponent,
    ViewEditComponent,
    AddressProofComponent,
    MemberShipComponent,
    IncomeProofComponent,
    EmploymentComponent,
    BankComponent,
    ExistingLoanComponent,
    PropertyComponent,
    FirstQltyCheckComponent,
    SecondQltyCheckComponent,
    FinalQltyCheckComponent,
    CustomerInteractionComponent,
    VerificationProcessComponent,
    ValidationSignoffComponent,
    CunderWritingComponent,
    CreditSanctionComponent,
    LoanDocExeComponent,
    LoanDocvalidSignoffComponent,
    CreditDisburseComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
