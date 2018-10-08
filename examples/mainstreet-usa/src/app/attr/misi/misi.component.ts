import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-misi',
  template: `
  <h2>
    {{name}}
  </h2>
  <p class="centered">
    <img src="./assets/misi.jpg" class="attraction-img" alt="Move it and shake it with Judy and Nick." />
  </p>
  <p>
    Get the party started and celebrate with your favorite Disney and Pixar friends.
    Join the characters and dance in the street to celebrate and bust a move.
  </p>
  <ms-add-schedule [attraction]="name"></ms-add-schedule>
  `,
  styles: []
})
export class MisiComponent implements OnInit {

  name: string = 'Move It! Shake It! Dance & Play It! Street Party';

  constructor() { }

  ngOnInit() {
  }

}
