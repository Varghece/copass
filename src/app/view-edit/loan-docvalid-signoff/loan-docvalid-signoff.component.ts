import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-docvalid-signoff',
  templateUrl: './loan-docvalid-signoff.component.html',
  styleUrls: ['./loan-docvalid-signoff.component.scss']
})
export class LoanDocvalidSignoffComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../cdis'], {relativeTo: this.route});
  }
}
