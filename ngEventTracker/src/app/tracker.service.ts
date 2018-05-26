import { Injectable } from '@angular/core';
import { Tracker } from './models/tracker';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  datePipe: any;
  private url = 'http://localhost:8080/api/water';


  index() {
    return this.http.get<Tracker[]>(this.url)
         .pipe(
           catchError((err: any) => {
            console.log(err);
            return throwError('Error!');
          })
      );
  }

  create (tracker) {
    return this.http.post<Tracker>(this.url, tracker)
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('Error!');
      })
    );
   }

  updateTracker (tracker: Tracker) {
    // if (tracker.completed) {
    //  this.datePipe.transform(Date.now(), 'shortDate');
    // }
    // tracker.completeDate = '';
    return this.http.put<Tracker>(this.url + '/' + tracker.id, tracker)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error');
      })
    );
  }

  deleteWater (id) {
    return this.http.delete<Tracker>(this.url + '/' + id)
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('Error');
      })
    );
}
  constructor(private http: HttpClient,
              private date: DatePipe) { }
}
