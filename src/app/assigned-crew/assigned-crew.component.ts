import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../event-service.service';


@Component({
  selector: 'app-assigned-crew',
  templateUrl: './assigned-crew.component.html',
  styleUrls: ['./assigned-crew.component.scss']
})
export class AssignedCrewComponent implements OnInit {
vis = 1;
vif = 1;
name = 'Assigned to me';
  constructor( private router: Router, private eventService: EventServiceService) { }

  ngOnInit(): void {
  }
  onCreate(){
    // this.eventService.activated.emit(true);
    this.eventService.activated.next(true);
    this.router.navigate(['/new']);
  }
  boxvisble(){
    if (this.vis === 2){
      this.vis = 1;
    }
    else{
      this.vis = 2;
    }
  }
  boxvisbled(){
    if (this.vif === 2){
      this.vif = 1;
    }
    else{
      this.vif = 2;
    }
  }
  select(d){
    if (this.vis === 2){
      this.vis = 1;
    }
    else{
      this.vis = 2;
    }
    if (d === 6){
      this.name = 'Recently Completed';
    }
    else{
      this.name = 'Assigned to me';
    }
  }
}
