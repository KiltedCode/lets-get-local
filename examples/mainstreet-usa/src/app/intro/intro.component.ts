import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-intro',
  template: `
    <p>
      Welcome to Main Street U.S.A. in the Magic Kingdom!
      There is so much to see and do here, so use this guide to get you started.
    </p>
  `,
  styles: []
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
