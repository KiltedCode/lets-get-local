import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-about-text',
  template: `
    <p [innerHTML]="'ABOUT.TEXT' | translate">
      Description text for attractions from <a href="https://disneyworld.disney.go.com/">https://disneyworld.disney.go.com/</a>
      and &copy; Disney, All Rights Reserved. Alternative image text and other translations completed with Google Translate.
    </p>
  `,
  styles: []
})
export class AboutTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
