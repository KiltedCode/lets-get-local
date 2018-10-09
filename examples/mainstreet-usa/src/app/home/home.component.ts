import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-home',
  template: `
    <h1>Main Street U.S.A.</h1>
    <ms-menu></ms-menu>
    <router-outlet></router-outlet>
    <p class="about-link">
      <a routerLink="/about" class="menu-link">About Text</a>
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
