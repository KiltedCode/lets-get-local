import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-intro',
  template: `
    <p i18n="Introduction paragraph.@@intro">
      Welcome to Main Street U.S.A. in the Magic Kingdom!
      There is so much to see and do here, so use this guide to get you started.
      Select one of the above items to read more about what Main Street has to offer.
    </p>
    <p class="centere">
      <img src="./assets/main-street.jpg"
          class="attraction-img"
          alt="Just around the corner is a Fantasyland."
          i18n-alt="@@introImageAlt" />
    </p>
  `,
  styles: []
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
