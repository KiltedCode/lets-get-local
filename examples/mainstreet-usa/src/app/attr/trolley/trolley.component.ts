import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-trolley',
  template: `
    <h2>
      {{name}}
    </h2>
    <p class="centered">
      <img src="./assets/trolley.jpg" class="attraction-img" alt="See the trolley kids sing and dance their way down the street." />
    </p>
    <p>
      Watch citizens of Main Street perform their way down the street along side the trolley.
      They sing and dance while the trolley travels from the castle to the train station.
    </p>
    <ms-add-schedule [attraction]="name"></ms-add-schedule>
  `,
  styles: []
})
export class TrolleyComponent implements OnInit {

  name: string = 'Main Street Trolley Show';

  constructor() { }

  ngOnInit() {
  }

}
