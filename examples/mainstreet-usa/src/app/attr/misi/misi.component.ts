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
    Brush up on your dance moves, grab your camera and get ready to raise the roof at the most awesome bash ever!
  </p>
  <p>
    You'll want to party it up when you see giant gift boxes circle in front of Cinderella Castle — their presence means the shindig is about to begin.
    Use your camera to capture yourself as you bust a move in the middle of the celebration.
    nd be sure to use the tag #MoveitShakeitPics on your posts to keep the digital party going!
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
