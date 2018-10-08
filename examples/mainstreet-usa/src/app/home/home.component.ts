import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-home',
  template: `
    <h1>Main Street U.S.A.</h1>
    <ms-menu></ms-menu>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
