import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pancard',
  templateUrl: './pancard.component.html',
  styleUrls: ['./pancard.component.scss']
})
export class PancardComponent implements OnInit {

  constructor(private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onCreate(){
    this.router.navigate(['../address'], {relativeTo: this.route});
  }
  previous(){
    this.router.navigate(['../aadhar'], {relativeTo: this.route});
  }
}
