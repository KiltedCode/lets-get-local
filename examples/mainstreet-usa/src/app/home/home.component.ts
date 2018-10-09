import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-home',
  template: `
    <h1 [translate]="'HOME.TITLE'">Main Street U.S.A.</h1>
    <ms-menu></ms-menu>
    <router-outlet></router-outlet>
    <p class="about-link">
      <a routerLink="/about"
        class="menu-link"
        [translate]="'ABOUT.LINK_TEXT'">
          About Text
      </a>
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(
    translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'pt']);

    const browserLang = translate.getBrowserLang();
    console.log('browserLang', browserLang);
    translate.use(browserLang);
  }

  ngOnInit() {
  }

}
