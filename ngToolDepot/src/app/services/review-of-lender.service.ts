import { Injectable } from '@angular/core';
import { ReviewOfLender } from '../models/review-of-lender';

@Injectable({
  providedIn: 'root'
})
export class ReviewOfLenderService {

  constructor() { }

  create(reviewOfLender: ReviewOfLender) {
    return null;
    }

    update(id: number, reviewOfLender: ReviewOfLender) {

      return null;
    }

    destroy(id: number) {

      return null;
    }

    index() {

      return null;
    }
}
