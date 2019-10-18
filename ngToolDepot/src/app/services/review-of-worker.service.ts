import { Injectable } from '@angular/core';
import { ReviewOfWorker } from '../models/review-of-worker';

@Injectable({
  providedIn: 'root'
})
export class ReviewOfWorkerService {

  constructor() { }

  create(reviewOfWorker: ReviewOfWorker) {
    return null;
    }

    update(id: number, reviewOfWorker: ReviewOfWorker) {

      return null;
    }

    destroy(id: number) {

      return null;
    }

    index() {

      return null;
    }
}
