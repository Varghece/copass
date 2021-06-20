import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-qlty-check',
  templateUrl: './first-qlty-check.component.html',
  styleUrls: ['./first-qlty-check.component.scss']
})
export class FirstQltyCheckComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../secondqty'], {relativeTo: this.route});
  }
}
