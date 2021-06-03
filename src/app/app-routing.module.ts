import { PancardComponent } from './pancard/pancard.component';
import { AadharCardComponent } from './aadhar-card/aadhar-card.component';
import { BasicInformarionComponent } from './basic-informarion/basic-informarion.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AssignedCrewComponent } from './assigned-crew/assigned-crew.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'crew', pathMatch: 'full'},
  { path: 'crew', component: AssignedCrewComponent },
  // { path: 'new', component: NewCustomerComponent },
  { path: 'new', component: NewCustomerComponent, children: [
    { path: '', redirectTo: 'basic',pathMatch: 'full' },
    { path: 'basic', component: BasicInformarionComponent },
    { path: 'aadhar', component: AadharCardComponent },
    { path: 'pan', component: PancardComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
