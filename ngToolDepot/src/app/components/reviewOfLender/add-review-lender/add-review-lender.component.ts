import { ToolTransactionComponent } from './../../tool-transaction/tool-transaction.component';
import { ReviewOfLenderService } from './../../../services/review-of-lender.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewOfLender } from 'src/app/models/review-of-lender';

@Component({
  selector: 'app-add-review-lender',
  templateUrl: './add-review-lender.component.html',
  styleUrls: ['./add-review-lender.component.scss']
})
export class AddReviewLenderComponent implements OnInit {

  reviewOfLender: ReviewOfLender = new ReviewOfLender();

  failedToEnterData = '';

  currentRate = 0;

  constructor(private reviewOfLenderSvc: ReviewOfLenderService, private toolTransComp: ToolTransactionComponent) {}

  ngOnInit() {
  }


  // unsure whats going on with basicModal
  addReviewOfLender(form: NgForm) {
    this.failedToEnterData = '';
    this.reviewOfLender = form.value;
    console.log(form.value);
    this.reviewOfLender.renterRating = this.currentRate;

    console.log(this.currentRate + ' *** CURRENT RATE');

    if (this.reviewOfLender.renterRating === 0
      || this.reviewOfLender.renterReview === '') {
        this.failedToEnterData = 'Something';
      } else {
        this.reviewOfLenderSvc.create(+this.toolTransComp.urlToolTransactionId, this.reviewOfLender).subscribe(
          () => {
            location.reload();
          },
          err => {
            console.error('ERROR IN ADD REVIEW LENDER - ADD REVIEW OF LENDER ()');
            console.error(err);
          }
        );
    }
  }

  locationReload() {
    location.reload();
  }
}
