import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-interaction',
  templateUrl: './customer-interaction.component.html',
  styleUrls: ['./customer-interaction.component.scss']
})
export class CustomerInteractionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../verpro'], {relativeTo: this.route});
  }
}
