import { EventServiceService } from './../event-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnDestroy {
  side = false;
  private activatedSub: Subscription;
  constructor(private eventService: EventServiceService) { }

  ngOnInit(): void {
    this.activatedSub = this.eventService.activated.subscribe(data => {
      this.side = data;
    } );
  }
  ngOnDestroy(): void{
    this.activatedSub.unsubscribe();
  }
  onclickli(){
      this.side = true;
  }
  onclicklil(){
    this.side = false;
  }
  // onActivate(componentReference){
  //   console.log(componentReference);
  //   componentReference.sendData.subscribe((data) => {
  //    console.log(data);
  //    if (data === 1){
  //     this.side = true;
  //    }
  //   });
  //   }
  }
