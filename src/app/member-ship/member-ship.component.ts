import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-ship',
  templateUrl: './member-ship.component.html',
  styleUrls: ['./member-ship.component.scss']
})
export class MemberShipComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  previous(){
    this.router.navigate(['../address'], {relativeTo: this.route});
  }
  onCreate(){
    this.router.navigate(['../income'], {relativeTo: this.route});
  }
}
