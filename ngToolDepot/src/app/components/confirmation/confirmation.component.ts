import { ToolTransactionComponent } from './../tool-transaction/tool-transaction.component';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolRental } from 'src/app/models/tool-rental';
import { ToolRentalService } from 'src/app/services/tool-rental.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  toolTransactions: ToolRental[] = [];
  urlToolTransactionId: string;
  toolService: any;
  display: ToolRental;
  selected = null;

  constructor(private toolRentalService: ToolRentalService,
              private datePipe: DatePipe,
              private currentRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.urlToolTransactionId = this.getCommandLineParameter();
    this.currentRoute.queryParams.subscribe(params => {
      this.urlToolTransactionId = params.id;
    });
    // console.error('transaction id ' + this.urlToolTransactionId);
    this.toolService.findById(this.urlToolTransactionId).subscribe(
      lifeIsGood => {
        this.display = lifeIsGood;
        console.log(this.display);
      },
      lifeIsBad => {
        console.error('Error in ngOnInit.confirmation');
        console.error(lifeIsBad);
      }
    );
    this.reloadPage();
  }

  getCommandLineParameter(): string {
    let idString = '';
    if (this.currentRoute.snapshot.paramMap.get('id')) {
      idString = this.currentRoute.snapshot.paramMap.get('id');
      console.log(idString);
    }
    return idString;
  }
  reloadPage() {
    // this.displayTool(this.toolComp);
    this.toolRentalService.index().subscribe(
      lifeIsGood => {
        this.toolTransactions = lifeIsGood;
        if (this.urlToolTransactionId) {
          this.selected = this.toolTransactions.find((data => data.id === Number(this.urlToolTransactionId)));
          if (!this.selected) {
            this.router.navigateByUrl('**');
          }
        }
      },
      lifeIsBad => {
        console.error('Error in toolTransactionComponent.reloadTransactions()');
        console.error(lifeIsBad);
      }
    );
  }

}
