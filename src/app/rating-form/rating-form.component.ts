import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-rating-form',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.scss',
})
export class RatingFormComponent {
  rating!: number;

  constructor(private router: Router, private ratingService: RatingService) {}

  submitRating() {
    console.log('Rating submitted: ', this.rating);
    this.ratingService.updateRating(this.rating);
    this.router.navigate(['/thanks']);
  }
}
