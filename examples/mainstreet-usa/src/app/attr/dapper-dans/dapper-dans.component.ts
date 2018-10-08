import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-dapper-dans',
  template: `
  <h2>
    {{name}}
  </h2>
  <p class="centered">
    <img src="./assets/dapper.jpg" class="attraction-img" alt="Enjoy the sweet sounds of their singing." />
  </p>
  <p>
    See this classic barbershop quartet sing, tap, play the chimes, dance, and even provide a little humor all to entertain you.
    Hear their renditions of a cappella Americana and Disney tunes for the whole family.
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
