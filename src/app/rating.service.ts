import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  private ratingSubject = new BehaviorSubject<number>(0);
  rating$: Observable<number> = this.ratingSubject.asObservable();
  constructor() {}

  updateRating(rating: number) {
    this.ratingSubject.next(rating);
  }
}
