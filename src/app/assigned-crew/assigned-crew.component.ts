import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assigned-crew',
  templateUrl: './assigned-crew.component.html',
  styleUrls: ['./assigned-crew.component.scss']
})
export class AssignedCrewComponent implements OnInit {
  i = 1;
@Output() sendData = new EventEmitter<number>();

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
}
