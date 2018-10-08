import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalizeService {
  private mockError: number = 0;
  private mockErrorCount: number = 4;

  constructor() { }

  addAttraction (attraction: string): Observable<string> {
    this.mockError = (this.mockError + 1) % this.mockErrorCount;
    if (this.mockError === 3) {
      return throwError({msg: 'Error adding to schedule.'});
    }
    return of(`Added ${attraction} successfully.`);
  }
}
