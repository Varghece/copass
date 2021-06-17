import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existing-loan',
  templateUrl: './existing-loan.component.html',
  styleUrls: ['./existing-loan.component.scss']
})
export class ExistingLoanComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  previous(){
    this.router.navigate(['../bank'], {relativeTo: this.route});
  }
  onCreate(){
    this.router.navigate(['../property'], {relativeTo: this.route});
  }
}
