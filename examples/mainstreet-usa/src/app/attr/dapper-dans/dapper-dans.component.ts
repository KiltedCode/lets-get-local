import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-dapper-dans',
  template: `
  <h2>
    {{name}}
  </h2>
  <p class="centered">
    <img src="./assets/dapper.jpg"
        class="attraction-img"
        alt="Enjoy the sweet sounds of their singing."
        i18n-alt="@@dapperDansImageAlt" />
  </p>
  <p i18n="Description of the Dapper Dans.@@dapperDansText">
    Gather 'round when the Dapper Dans come to town, the finest barbershop quartet in a 2-block radius!
    Wearing their colorful pinstriped suits, straw hats and taps, this 4-man group sings a soulful a cappella Americana and Disney tunes.
    Add tap dancing and “pun”-forgettable vaudeville humor, and you have an act the whole family will enjoy!
  </p>
  <ms-add-schedule [attraction]="name"></ms-add-schedule>
  `,
  styles: []
})
export class DapperDansComponent implements OnInit {

  name: string = 'The Dapper Dans';

  constructor() { }

  ngOnInit() {
  }

}
