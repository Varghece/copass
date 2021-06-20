import { LoanDocvalidSignoffComponent } from './view-edit/loan-docvalid-signoff/loan-docvalid-signoff.component';
import { LoanDocExeComponent } from './view-edit/loan-doc-exe/loan-doc-exe.component';
import { CreditSanctionComponent } from './view-edit/credit-sanction/credit-sanction.component';
import { CunderWritingComponent } from './view-edit/cunder-writing/cunder-writing.component';
import { ValidationSignoffComponent } from './view-edit/validation-signoff/validation-signoff.component';
import { VerificationProcessComponent } from './view-edit/verification-process/verification-process.component';
import { CustomerInteractionComponent } from './view-edit/customer-interaction/customer-interaction.component';
import { FinalQltyCheckComponent } from './view-edit/final-qlty-check/final-qlty-check.component';
import { SecondQltyCheckComponent } from './view-edit/second-qlty-check/second-qlty-check.component';
import { FirstQltyCheckComponent } from './view-edit/first-qlty-check/first-qlty-check.component';
import { CreditDisbAuthComponent } from './credit-disb-auth/credit-disb-auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './property/property.component';
import { ExistingLoanComponent } from './existing-loan/existing-loan.component';
import { BankComponent } from './bank/bank.component';
import { EmploymentComponent } from './employment/employment.component';
import { IncomeProofComponent } from './income-proof/income-proof.component';
import { MemberShipComponent } from './member-ship/member-ship.component';
import { AddressProofComponent } from './address-proof/address-proof.component';
import { ViewEditComponent } from './view-edit/view-edit.component';
import { RecentlycompletedComponent } from './assigned-crew/recentlycompleted/recentlycompleted.component';
import { AssignedtoMeComponent } from './assigned-crew/assignedto-me/assignedto-me.component';
import { PancardComponent } from './pancard/pancard.component';
import { AadharCardComponent } from './aadhar-card/aadhar-card.component';
import { BasicInformarionComponent } from './basic-informarion/basic-informarion.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AssignedCrewComponent } from './assigned-crew/assigned-crew.component';
import { CreditDisburseComponent } from './view-edit/credit-disburse/credit-disburse.component';

const routes: Routes = [
  { path: '', redirectTo: 'crew', pathMatch: 'full'},
  { path: 'crew', component: AssignedCrewComponent, children: [
    { path: '', redirectTo: 'assign',  pathMatch: 'full' },
    {path: 'assign', component: AssignedtoMeComponent},
    {path: 'recent', component: RecentlycompletedComponent}
  ] },
  // { path: 'new', component: NewCustomerComponent },
  { path: 'new', component: NewCustomerComponent, children: [
    { path: '', redirectTo: 'basic',  pathMatch: 'full' },
    { path: 'basic', component: BasicInformarionComponent },
    { path: 'aadhar', component: AadharCardComponent },
    { path: 'pan', component: PancardComponent },
    { path: 'address', component: AddressProofComponent },
    { path: 'member', component: MemberShipComponent },
    { path: 'income', component: IncomeProofComponent},
    { path: 'employment', component: EmploymentComponent},
    { path: 'bank', component: BankComponent},
    { path: 'eloan', component: ExistingLoanComponent},
    { path: 'property', component: PropertyComponent}
  ] },
  { path: 'view', component: ViewEditComponent, children: [
    { path: '', redirectTo: 'firstqty',  pathMatch: 'full' },
    {path: 'firstqty', component: FirstQltyCheckComponent},
    {path: 'secondqty', component: SecondQltyCheckComponent},
    {path: 'finalqty', component: FinalQltyCheckComponent},
    {path: 'custint', component: CustomerInteractionComponent},
    {path: 'verpro', component: VerificationProcessComponent},
    {path: 'valdsgn', component: ValidationSignoffComponent},
    {path: 'cuw', component: CunderWritingComponent},
    {path: 'csan', component: CreditSanctionComponent},
    {path: 'loanexe', component: LoanDocExeComponent},
    {path: 'loanvalid', component: LoanDocvalidSignoffComponent},
    {path: 'cdis', component: CreditDisburseComponent},
    {path: 'cdauth', component: CreditDisbAuthComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
