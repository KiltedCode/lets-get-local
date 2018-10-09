import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-about-text',
  template: `
    <p>
      Description text for attractions from <a href="https://disneyworld.disney.go.com/">https://disneyworld.disney.go.com/</a>
      and &copy; Disney, All Rights Reserved.
    </p>
  `,
  styles: []
})
export class AboutTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
