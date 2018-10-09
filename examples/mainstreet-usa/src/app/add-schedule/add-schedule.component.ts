import { Component, Input, OnInit } from '@angular/core';
import { PersonalizeService } from '../shared';
import { timer } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ms-add-schedule',
  template: `
    <button (click)="addToSchedule()"
            class="btn-add-schedule"
            [translate]="'ADD_SCHEDULE.BTN_TEXT'">
        + add to my schedule
      </button>
    <div class="message-box" [ngClass]="messageClass">{{ message }}</div>
  `,
  styles: []
})
export class AddScheduleComponent implements OnInit {

  @Input() attraction: string;

  message: string;
  messageClass: string;

  private messageTypeClass: string;

  constructor(
    private personalizeService: PersonalizeService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.message = '';
    this.messageClass = '';
    this.messageTypeClass = '';
  }

  addToSchedule(): void {
    this.personalizeService.addAttraction(this.attraction)
        .subscribe(
          (msg: string) => {
            this.showMessage(msg, this.attraction, 'SUCCESS');
          },
          error => {
            this.showMessage(error.msg, this.attraction, 'ERROR');
          }
        );
  }

  collapseMessage(): void {
    this.messageClass = this.messageTypeClass;
    timer(1100).subscribe(() => this.hideMessage());
  }

  hideMessage(): void {
    this.message = '';
    this.messageClass = '';
  }

  showMessage(msg: string, attraction: string, type: string): void {
    this.translate.get(msg, {attraction: attraction}).subscribe(
      (res: string) => {
        this.message = res;
        switch (type) {
          case 'ERROR':
            this.messageTypeClass = 'error-message';
            break;
          case 'SUCCESS':
            this.messageTypeClass = 'success-message';
            break;
          default:
            this.messageTypeClass = 'default-message';
        }
        this.messageClass = 'expanded ' + this.messageTypeClass;

        timer(4000).subscribe(() => this.collapseMessage());
    });

  }

}
