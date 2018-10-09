import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-trolley',
  template: `
    <h2>
      {{name}}
    </h2>
    <p class="centered">
      <img src="./assets/trolley.jpg" class="attraction-img" alt="{{'TROLLEY.IMG_ALT' | translate}}" />
    </p>
    <p [translate]="'TROLLEY.TEXT_1'">
      Dressed in costumes from a bygone era, 12 performers ride a trolley until it stops for them to break out in song and dance.
      They put on show for whoever is wandering the street.
    </p>
    <p [translate]="'TROLLEY.TEXT_2'">
      Bursting with excitement, they belt out tunes such as "The Most Magical Place on Earth,"
      "Walkin' Right Down the Middle of Main Street, U.S.A."
      and “The Trolley Song"—all seamlessly strung together and choreographed to lively dance routines.
    </p>
    <p [translate]="'TROLLEY.TEXT_3'">
      So, stop when the trolley stops and be dazzled by the show!
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
