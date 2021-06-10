import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assigned-crew',
  templateUrl: './assigned-crew.component.html',
  styleUrls: ['./assigned-crew.component.scss']
})
export class AssignedCrewComponent implements OnInit {
@Output() sendData = new EventEmitter();
i = 1;
vis = 1;
vif = 1;
name = 'Assigned to me';
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  anyFunction(){
    console.log('called from parent')
  }
  onCreate(){
    this.sendData.emit(this.i);
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
