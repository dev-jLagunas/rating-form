import { Routes } from '@angular/router';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';

export const routes: Routes = [
  { path: 'home', component: RatingFormComponent },
  { path: 'thanks', component: ThanksPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
