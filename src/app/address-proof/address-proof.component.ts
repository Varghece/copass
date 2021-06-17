import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-proof',
  templateUrl: './address-proof.component.html',
  styleUrls: ['./address-proof.component.scss']
})
export class AddressProofComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  previous(){
    this.router.navigate(['../pan'], {relativeTo: this.route});
  }
  onCreate(){
    this.router.navigate(['../member'], {relativeTo: this.route});
  }
}
