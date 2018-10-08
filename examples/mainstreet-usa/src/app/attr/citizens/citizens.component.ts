import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-citizens',
  template: `
  <h2>
    {{name}}
  </h2>
  <img src="./assets/citizens.jpg" class="attraction-img" alt="Learn the latest gossip from the turn of the century." />
  <p>
    Meet the citizens of Main Street in the early 20th century bests.
    These colorful characters will welcome a pleasant chat and pose for a picture with that fancy camera of yours.
  </p>
  <ms-add-schedule [attraction]="name"></ms-add-schedule>
  `,
  styles: []
})
export class CitizensComponent implements OnInit {

  name: string = 'Citizens of Main Street';

  constructor() { }

  ngOnInit() {
  }

}
