import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-doc-exe',
  templateUrl: './loan-doc-exe.component.html',
  styleUrls: ['./loan-doc-exe.component.scss']
})
export class LoanDocExeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../loanvalid'], {relativeTo: this.route});
  }

}
