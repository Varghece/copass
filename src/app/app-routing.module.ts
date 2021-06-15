import { ViewEditComponent } from './view-edit/view-edit.component';
import { RecentlycompletedComponent } from './assigned-crew/recentlycompleted/recentlycompleted.component';
import { AssignedtoMeComponent } from './assigned-crew/assignedto-me/assignedto-me.component';
import { PancardComponent } from './pancard/pancard.component';
import { AadharCardComponent } from './aadhar-card/aadhar-card.component';
import { BasicInformarionComponent } from './basic-informarion/basic-informarion.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AssignedCrewComponent } from './assigned-crew/assigned-crew.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    { path: 'pan', component: PancardComponent }
  ] },
  { path: 'view', component: ViewEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
