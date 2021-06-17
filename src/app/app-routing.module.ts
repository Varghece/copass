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
    { path: '', redirectTo: 'cdauth',  pathMatch: 'full' },
    {path: 'cdauth', component: CreditDisbAuthComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
