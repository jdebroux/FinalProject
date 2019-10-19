import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  // transactions: Transaction[] = [];
  // newTransaction: Transaction = new Transaction();
  // selected: Transaction = null;

  // constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  // addTransaction(form: NgForm) {
  //   this.transactionService.create(this.newTransaction).subscribe(
  //     data => {
  //       this.newTransaction = new Transaction();
  //       form.reset();
  //       this.reload();
  //     },
  //     err => console.error('Error in TransactionComponent.addTransaction(): ' + err)
  //   );
  // }

  // updateTransaction(transaction: Transaction) {
  //   this.transactionService.update(transaction).subscribe(
  //     data => {
  //       this.reload();
  //       this.selected = null;
  //     },
  //     err => console.error('Error in TransactionComponent.updateTransaction(): ' + err)
  //   );
  // }

  // deleteTransaction(id: number) {
  //   this.transactionService.destroy(id).subscribe(
  //     data => {
  //       this.reload();
  //     },
  //     err => {
  //       console.error('Error in Error in TransactionComponent.deleteTransaction():');
  //       console.error(err);
  //     }
  //   );
  // }

  // reload() {
  //   this.transactionService.index().subscribe(
  //     data => {
  //       this.transaction = data;
  //       if (this.urlTransactionId) {
  //         this.selected = this.transaction[parseInt(this.urlTransactionId, 10) - 1];
  //         this.urlTransactionId = '';
  //       }
  //     },
  //     err => {
  //       console.error('Error in TransactionComponent.reload');
  //       console.error(err);
  //     }
  //   );
  // }

}
