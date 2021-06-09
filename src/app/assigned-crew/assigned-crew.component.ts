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
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  // onclickli(){
  //   if (this.side === true){
  //     this.side = false;
  //   }
  //   else{
  //     this.side = true;
  //   }
  // }
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
}
