import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aadhar-card',
  templateUrl: './aadhar-card.component.html',
  styleUrls: ['./aadhar-card.component.scss']
})
export class AadharCardComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onCreate(){
    this.router.navigate(['../pan'], {relativeTo: this.route});
  }
  previous(){
    this.router.navigate(['../basic'], {relativeTo: this.route});
  }
}
