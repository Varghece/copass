import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  previous(){
    this.router.navigate(['../employment'], {relativeTo: this.route});
  }
  onCreate(){
    this.router.navigate(['../eloan'], {relativeTo: this.route});
  }
}
