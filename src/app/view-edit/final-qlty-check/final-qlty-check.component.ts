import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-qlty-check',
  templateUrl: './final-qlty-check.component.html',
  styleUrls: ['./final-qlty-check.component.scss']
})
export class FinalQltyCheckComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../custint'], {relativeTo: this.route});
  }

}
