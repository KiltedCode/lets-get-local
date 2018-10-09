import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-home',
  template: `
    <h1 i18n="title|Main title of application.@@title">Main Street U.S.A.</h1>
    <ms-menu></ms-menu>
    <router-outlet></router-outlet>
    <p class="about-link">
      <a routerLink="/about" class="menu-link" i18n="Link to page about text.@@aboutLink">About Text</a>
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
