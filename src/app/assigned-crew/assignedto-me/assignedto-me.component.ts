import { EventServiceService } from './../../event-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignedto-me',
  templateUrl: './assignedto-me.component.html',
  styleUrls: ['./assignedto-me.component.scss']
})
export class AssignedtoMeComponent implements OnInit {

  constructor(private router: Router, private eventService: EventServiceService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/view']);
    this.eventService.activated.next(true);
  }

}
