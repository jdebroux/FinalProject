import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolRental } from 'src/app/models/tool-rental';
import { ToolRentalService } from 'src/app/services/tool-rental.service';

@Component({
  selector: 'app-tool-transaction',
  templateUrl: './tool-transaction.component.html',
  styleUrls: ['./tool-transaction.component.scss']
})
export class ToolTransactionComponent implements OnInit {
  editToolTransaction = null;
  selected = null;
  showComplete = false;
  urlToolTransactionId: string;
  toolTransactions: ToolRental[] = [];

  newToolTransaction = new ToolRental();

  constructor(private toolRentalService: ToolRentalService,
              private datePipe: DatePipe,
              private currentRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.urlToolTransactionId = this.getCommandLineParameter();
    this.reloadToolTransactions();
  }

  getCommandLineParameter(): string {
    let idString = '';
    if (this.currentRoute.snapshot.paramMap.get('id')) {
      idString =  this.currentRoute.snapshot.paramMap.get('id');
    }
    return idString;
  }

  showTotalToolTransactions(): number {
    const total = this.toolTransactions.length;
    return total;
  }

  displayToolTransactions(toolTransaction: ToolRental) {
    this.selected = toolTransaction;
  }

  displayTable() {
    this.selected = null;
  }

  setReturned(id: number, toolTransaction: ToolRental) {
    if (toolTransaction.returned === null) {
      toolTransaction.returned = new Date().toDateString();
    }
    this.updateToolTransaction(id, toolTransaction);
  }

  addToolTransactions(form: NgForm) {
    this.newToolTransaction = new ToolRental();

    // TODO need logic entered here.

    this.toolRentalService.create(this.newToolTransaction).subscribe(
      () => {
        this.reloadToolTransactions();
      },
      err => {
        console.error('ToolTransactionComponent - addToolTransaction()');
        console.error(err);
      }
    );
    form.reset();
  }

  setEditToolTransaction() {
    this.editToolTransaction = Object.assign({}, this.selected);
  }

  cancelEditToolTransaction() {
    this.editToolTransaction = null;
  }

  updateToolTransaction(id: number, editedToolTransaction: ToolRental) {

    // TODO logic needs to be entered here

    this.toolRentalService.update(id, editedToolTransaction).subscribe(
      () => {
        this.reloadToolTransactions();
      },
      err => {
        console.error('toolTransactionComponent - updateToolTransaction()');
        console.error(err);
      }
    );
    this.editToolTransaction = null;
    this.selected = null;
  }

  deleteToolTransaction(id: number) {
    this.toolRentalService.destroy(id).subscribe(
      () => {
        this.reloadToolTransactions();
      },
      err => {
        console.error('toolTransactionComponent - deleteToolTransaction()');
        console.error(err);
      }
    );
    this.reloadToolTransactions();
  }

  reloadToolTransactions() {
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


  // TODO we dont need this but could utilize in a different way.

  // checkTotalToolTransactions(): string {
  //   let classColor = '';
  //   if (this.showTotalToolTransactions() >= 10) {
  //     classColor = 'badge badge-pill badge-danger';
  //   } else if (this.showTotalToolTransactions() >= 5) {
  //     classColor = 'badge badge-pill badge-warning';
  //   } else if (this.showTotalToolTransactions() < 5) {
  //     classColor = 'badge badge-pill badge-success';
  //   }
  //   return classColor;
  // }
}
