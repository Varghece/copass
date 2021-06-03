import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  value = '';
  side = false;
  constructor() { }

  ngOnInit(): void {
  }
  onclickli(){
    // if (this.side === true){
      this.side = true;
    // }
    // else{
    //   this.side = true;
    // }
  }
  onclicklil(){
    this.side = false;
  }
  sendData(value: any){
    console.log(value);
  }
}
