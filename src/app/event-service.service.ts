import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  // activated = new EventEmitter<boolean>();
  activated = new Subject<boolean>();

  constructor() { }
}
