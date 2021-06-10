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
    AssignedtoMeComponent
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
