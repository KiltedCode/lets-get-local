import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-citizens',
  template: `
  <h2>
    {{name}}
  </h2>
  <p class="centered">
    <img src="./assets/citizens.jpg" class="attraction-img" alt="Learn the latest gossip from the turn of the century." />
  </p>
  <p i18n="Description about citizens of main street.@@citizensText1">
    Make way for the horseless carriage! And say "How d'you do" to some of the most fascinating folks you'll ever meet.
    Smartly stylish in their early 20th-century finery, these larger-than-life small-town denizens can be spotted along Main Street throughout the day.
  </p>
  <p i18n="Description about meeting citizens of main street.@@citizensText2">
    They're always charmed to make your acquaintance and to bend your ear with the latest local scuttlebutt.
    You might even be treated to a rousing recital from the Main Street choir. And don't forget your new-fangled camera.
    These Citizens will be "pleased as punch" to pose for pictures.
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
