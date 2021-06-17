import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  previous(){
    this.router.navigate(['../income'], {relativeTo: this.route});
  }
  onCreate(){
    this.router.navigate(['../bank'], {relativeTo: this.route});
  }
}
