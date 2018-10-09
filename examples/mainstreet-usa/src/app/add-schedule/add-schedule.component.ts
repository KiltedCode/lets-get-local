import { Component, Input, OnInit } from '@angular/core';
import { PersonalizeService } from '../shared';
import { timer } from 'rxjs';

@Component({
  selector: 'ms-add-schedule',
  template: `
    <button (click)="addToSchedule()"
        class="btn-add-schedule"
        i18n="Button to add attraction to schedule.@@addScheduleButton">
      + add to my schedule
    </button>
    <div class="message-box error-message"
        [ngClass]="{'expanded': showErrorMessage}"
        i18n="Message when error adding to schedule.@@addError">
          Error adding to schedule.
    </div>
    <div class="message-box success-message"
        [ngClass]="{'expanded': showSuccessMessage}"
        i18n="Message when successfully adding to schedule.@@addSuccess">
          Added successfully to schedule.
    </div>
  `,
  styles: []
})
export class AddScheduleComponent implements OnInit {

  @Input() attraction: string;

  showErrorMessage: boolean;
  showSuccessMessage: boolean;

  constructor(
    private personalizeService: PersonalizeService
  ) { }

  ngOnInit() {
    this.resetShows();
  }

  addToSchedule(): void {
    this.personalizeService.addAttraction(this.attraction)
        .subscribe(
          (msg: string) => {
            this.showMessage('SUCCESS');
          },
          error => {
            this.showMessage('ERROR');
          }
        );
  }

  collapseMessage(): void {
    this.resetShows();
  }

  resetShows(): void {
    this.showErrorMessage = false;
    this.showSuccessMessage = false;
  }

  showMessage(type: string): void {
    switch (type) {
      case 'ERROR':
        this.showErrorMessage = true;
        break;
      case 'SUCCESS':
        this.showSuccessMessage = true;
        break;
      default:
        break;
    }

    timer(4000).subscribe(() => this.collapseMessage());
  }

}
