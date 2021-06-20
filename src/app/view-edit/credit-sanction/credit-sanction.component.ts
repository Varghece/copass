import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-sanction',
  templateUrl: './credit-sanction.component.html',
  styleUrls: ['./credit-sanction.component.scss']
})
export class CreditSanctionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../loanexe'], {relativeTo: this.route});
  }
}
