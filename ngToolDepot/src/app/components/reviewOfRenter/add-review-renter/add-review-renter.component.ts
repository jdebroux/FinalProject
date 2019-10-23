import { ReviewOfRenter } from './../../../models/review-of-renter';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewOfRenterService } from 'src/app/services/review-of-renter.service';
import { ToolTransactionComponent } from '../../tool-transaction/tool-transaction.component';

@Component({
  selector: 'app-add-review-renter',
  templateUrl: './add-review-renter.component.html',
  styleUrls: ['./add-review-renter.component.scss']
})
export class AddReviewRenterComponent implements OnInit {

  reviewOfRenter: ReviewOfRenter = new ReviewOfRenter();


  currentRatingForLender = 0;

  currentRatingForTool = 0;

  constructor(private reviewOfRenterSvc: ReviewOfRenterService, private toolTransComp: ToolTransactionComponent) {}

  ngOnInit() {
  }

// unsure whats going on with basicModal
addReviewOfRenter(form: NgForm) {
  this.reviewOfRenter = form.value;
  console.log(form.value);
  this.reviewOfRenter.lenderRating = this.currentRatingForLender;
  this.reviewOfRenter.toolRating = this.currentRatingForTool;

  console.log(this.currentRatingForLender + ' ' + this.currentRatingForTool + ' *** CURRENT RATE');

  if (this.reviewOfRenter.lenderRating === 0
    || this.reviewOfRenter.lenderReview === '') {
    } else {
      this.reviewOfRenterSvc.create(1, this.reviewOfRenter).subscribe(
        () => {
          location.reload();
        },
        err => {
          console.error('ERROR IN ADD REVIEW RENTER - ADD REVIEW OF RENTER ()');
          console.error(err);
        }
      );
  }
}

locationReload() {
  location.reload();
}
}
