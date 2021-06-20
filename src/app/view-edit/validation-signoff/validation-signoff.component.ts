import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-signoff',
  templateUrl: './validation-signoff.component.html',
  styleUrls: ['./validation-signoff.component.scss']
})
export class ValidationSignoffComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../cuw'], {relativeTo: this.route});
  }
}
