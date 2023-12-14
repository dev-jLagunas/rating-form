import { Component } from '@angular/core';
import { RatingService } from '../rating.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-thanks-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './thanks-page.component.html',
  styleUrl: './thanks-page.component.scss',
})
export class ThanksPageComponent {
  rating$ = this.ratingService.rating$;

  constructor(private ratingService: RatingService) {}
}
