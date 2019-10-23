import { ReviewOfLender } from 'src/app/models/review-of-lender';
import { Component, OnInit, Input } from '@angular/core';
import { ReviewOfLenderService } from 'src/app/services/review-of-lender.service';
import { ToolTransactionComponent } from '../../tool-transaction/tool-transaction.component';

@Component({
  selector: 'app-delete-review-lender',
  templateUrl: './delete-review-lender.component.html',
  styleUrls: ['./delete-review-lender.component.scss']
})
export class DeleteReviewLenderComponent implements OnInit {
  @Input() reviewOfLender: ReviewOfLender;

  constructor(private reviewOfLenderSvc: ReviewOfLenderService, private toolTransactionComp: ToolTransactionComponent) { }

  ngOnInit() {
  }

  delete() {
    this.reviewOfLenderSvc.destroy(+this.toolTransactionComp.urlToolTransactionId, this.reviewOfLender.id).subscribe(
      () => {
        console.log('Success deleting');
        location.reload();
      },
      err => {
        console.error('delete-tool - delete()');
        console.error(err);
      }
    );
  }
}
