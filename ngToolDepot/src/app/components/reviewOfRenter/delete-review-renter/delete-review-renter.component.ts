import { Component, OnInit, Input } from '@angular/core';
import { ReviewOfRenter } from 'src/app/models/review-of-renter';
import { ReviewOfRenterService } from 'src/app/services/review-of-renter.service';
import { ToolTransactionComponent } from '../../tool-transaction/tool-transaction.component';

@Component({
  selector: 'app-delete-review-renter',
  templateUrl: './delete-review-renter.component.html',
  styleUrls: ['./delete-review-renter.component.scss']
})
export class DeleteReviewRenterComponent implements OnInit {
  @Input() reviewOfRenter: ReviewOfRenter;

  constructor(private reviewOfLenderSvc: ReviewOfRenterService, private toolTransactionComp: ToolTransactionComponent) { }

  ngOnInit() {
  }

  delete() {
    this.reviewOfLenderSvc.destroy(+this.toolTransactionComp.urlToolTransactionId, this.reviewOfRenter.id).subscribe(
      () => {
        console.log('Success deleting IN DELETE REVIEW RENTER');
        location.reload();
      },
      err => {
        console.error('delete-tool - RORdelete()');
        console.error(err);
      }
    );
  }
}
