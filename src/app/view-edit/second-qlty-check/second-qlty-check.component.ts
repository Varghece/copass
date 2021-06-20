import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-qlty-check',
  templateUrl: './second-qlty-check.component.html',
  styleUrls: ['./second-qlty-check.component.scss']
})
export class SecondQltyCheckComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../finalqty'], {relativeTo: this.route});
  }
}
