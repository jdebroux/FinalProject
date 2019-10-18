import { Injectable } from '@angular/core';
import { ReviewOfRenter } from '../models/review-of-renter';

@Injectable({
  providedIn: 'root'
})
export class ReviewOfRenterService {

  constructor() { }

  create(reviewOfRenter: ReviewOfRenter) {
    return null;
    }

    update(id: number, reviewOfRenter: ReviewOfRenter) {

      return null;
    }

    destroy(id: number) {

      return null;
    }

    index() {

      return null;
    }
}
