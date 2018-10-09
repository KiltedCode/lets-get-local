import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-mrff',
  template: `
    <h2>
      {{name}}
    </h2>
    <p class="centered">
      <img src="./assets/mrff.jpg"
          class="attraction-img"
          alt="See all your friends sing, dance, and let it go."
          i18n-alt="@@mrffImageAlt" />
    </p>
    <p i18n="Intro about stage show.@@mrffText1">
      This summer, skip-a-dee-doo-dah to the Cinderella Castle Forecourt stage for the fairest faire of them all!
    </p>
    <p i18n="Description of stage show.@@mrffText2">
      It takes a whole enchanted kingdom to put on this all-new, live stage show at Magic Kingdom park—and you’re cordially invited!
      In preparation for this joyous festival, Mickey and friends have ventured far and wide to gather Disney pals from all
      over to star in a royal friendship faire.
    </p>
    <p i18n="Description about characters in show.@@mrffText3">
      Goofy has invited Tiana and friends from the Land of the Bewitching Bayous to infuse a little spice of New Orleans jazz in the party.
      Donald Duck brings some new friends he met at the Snuggly Duckling from the Land of Enchanted Woods to shake their tail feathers.
      Daisy has asked Rapunzel and Flynn to “comb” over and sing along.
      Mickey even recruited Olaf, Anna and Elsa from the Land of the Mystic Mountains to cast some extra cool touches!
    </p>
    <p i18n="Description about end of stage show.@@mrffText4">
      This grand affair culminates in the joining of classic and contemporary Disney Characters in a spectacular show
      featuring lively dancing, dazzling effects, an original song and memorable music from The Princess and the Frog, Tangled and Frozen.
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
