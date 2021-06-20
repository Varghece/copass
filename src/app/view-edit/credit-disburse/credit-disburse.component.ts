import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-disburse',
  templateUrl: './credit-disburse.component.html',
  styleUrls: ['./credit-disburse.component.scss']
})
export class CreditDisburseComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../cdauth'], {relativeTo: this.route});
  }

}
