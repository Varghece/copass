import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-process',
  templateUrl: './verification-process.component.html',
  styleUrls: ['./verification-process.component.scss']
})
export class VerificationProcessComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../valdsgn'], {relativeTo: this.route});
  }
}
