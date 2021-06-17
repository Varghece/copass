import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-proof',
  templateUrl: './income-proof.component.html',
  styleUrls: ['./income-proof.component.scss']
})
export class IncomeProofComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  previous(){
    this.router.navigate(['../member'], {relativeTo: this.route});
  }
  onCreate(){
    this.router.navigate(['../employment'], {relativeTo: this.route});
  }
}
