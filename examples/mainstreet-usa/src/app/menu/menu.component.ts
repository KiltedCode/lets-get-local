import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'ms-menu',
  template: `
    <hr class="hr-menu" />
    <a *ngIf="attraction" routerLink="/" class="menu-link" [translate]="'MENU.BACK'">< Back</a>
    <ng-container *ngIf="!attraction">
      <a routerLink="/attraction/citizens" class="menu-link">Citizens of Main Street</a>
      <a routerLink="/attraction/dapper" class="menu-link">The Dapper Dans</a>
      <a routerLink="/attraction/misi" class="menu-link">Move It! Shake It! Dance &amp; Play It! Street Party</a>
      <a routerLink="/attraction/mrff" class="menu-link">Mickey's Royal Friendship Faire</a>
      <a routerLink="/attraction/trolley" class="menu-link">Main Street Trolley Show</a>
    </ng-container>
    <hr class="hr-menu" />
  `,
  styles: []
})
export class MenuComponent implements OnInit {
  attraction: boolean;

  constructor(
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        this.attraction = event.url.startsWith('/attraction');
      }
    });
  }

  ngOnInit() {
  }

}
