import { Component, OnInit } from '@angular/core';
import { EventServiceService } from './../../event-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recentlycompleted',
  templateUrl: './recentlycompleted.component.html',
  styleUrls: ['./recentlycompleted.component.scss']
})
export class RecentlycompletedComponent implements OnInit {

  constructor(private router: Router, private eventService: EventServiceService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/view']);
    this.eventService.activated.next(true);
  }
}
