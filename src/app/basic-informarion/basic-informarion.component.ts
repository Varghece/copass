import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-informarion',
  templateUrl: './basic-informarion.component.html',
  styleUrls: ['./basic-informarion.component.scss']
})
export class BasicInformarionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(){
    this.router.navigate(['aadhar']);
  }
}
