import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-mrff',
  template: `
    <h2>
      {{name}}
    </h2>
    <p class="centered">
      <img src="./assets/mrff.jpg" class="attraction-img" alt="See all your friends sing, dance, and let it go." />
    </p>
    <p>
      See Mickey's and his pal sing and dance along side your favorite Disney pals.
      Mickey and the gang each invite some friends to celebrate in this joyous festival.
    </p>
    <ms-add-schedule [attraction]="name"></ms-add-schedule>
  `,
  styles: []
})
export class MrffComponent implements OnInit {

  name: string = 'Mickey\'s Royal Friendship Faire';

  constructor() { }

  ngOnInit() {
  }

}
