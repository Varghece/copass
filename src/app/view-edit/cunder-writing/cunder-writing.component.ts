import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cunder-writing',
  templateUrl: './cunder-writing.component.html',
  styleUrls: ['./cunder-writing.component.scss']
})
export class CunderWritingComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../csan'], {relativeTo: this.route});
  }

}
