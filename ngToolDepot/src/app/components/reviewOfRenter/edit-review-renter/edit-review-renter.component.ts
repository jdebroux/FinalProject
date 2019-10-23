import { Component, OnInit, Input } from '@angular/core';
import { ReviewOfRenter } from 'src/app/models/review-of-renter';
import { ReviewOfRenterService } from 'src/app/services/review-of-renter.service';
import { ToolTransactionComponent } from '../../tool-transaction/tool-transaction.component';

@Component({
  selector: 'app-edit-review-renter',
  templateUrl: './edit-review-renter.component.html',
  styleUrls: ['./edit-review-renter.component.scss']
})
export class EditReviewRenterComponent implements OnInit {

  @Input() reviewOfRenter: ReviewOfRenter;

  reviewToBeUpdated: ReviewOfRenter = new ReviewOfRenter();

  currentRatingForLender = 0;

  currentRatingForTool = 0;


    constructor(private reviewOfLenderSvc: ReviewOfRenterService, private toolTransactionComp: ToolTransactionComponent) { }

    ngOnInit() {
    }

    getReviewOfRenter() {
      this.reviewOfLenderSvc.index(+this.toolTransactionComp.urlToolTransactionId).subscribe(
        data => {
          this.reviewToBeUpdated = data;
          this.currentRatingForLender = this.reviewToBeUpdated.lenderRating;
          this.currentRatingForTool = this.reviewToBeUpdated.toolRating;
        },
        err => {
          console.error('Error in update-ROR - getReviewOfRenter()');
          console.error(err);
        }
      );
    }

    updateReviewOfRenter() {
      this.reviewToBeUpdated.lenderRating = this.currentRatingForLender;
      this.reviewToBeUpdated.toolRating = this.currentRatingForTool;

      this.reviewOfLenderSvc.update(+this.toolTransactionComp.urlToolTransactionId,
        this.reviewOfRenter.id, this.reviewToBeUpdated).subscribe(
        () => {
          console.log('review of Renter successful edit');
          location.reload();
        },
        err => {
          console.error('error updating review of Renter in comp');
          console.error(err);
        }
      );
    }
  }
