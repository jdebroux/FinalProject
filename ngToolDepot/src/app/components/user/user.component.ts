import { ToolTransactionComponent } from './../tool-transaction/tool-transaction.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToolService } from 'src/app/services/tool.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService,
              private datePipe: DatePipe,
              private currentRoute: ActivatedRoute,
              private tool: ToolService,
              private router: Router) {}

  editUser = null;
  selected = null;
  showComplete = false;
  urlUserId: string;
  users: User[] = [];
  newUser = new User();

  'use strict';

  ngOnInit() {
    this.urlUserId = this.getCommandLineParameter();
    this.reloadUsers();
  }

  getAllUsers() {
    this.reloadUsers();
    return [...this.users];
  }

  getCommandLineParameter(): string {
    let idString = '';
    if (this.currentRoute.snapshot.paramMap.get('id')) {
      idString =  this.currentRoute.snapshot.paramMap.get('id');
    }
    return idString;
  }

  showTotalUsers(): number {
    const total = this.users.length;
    return total;
  }

  displayUser(user: User) {
    this.selected = user;
  }

  displayTable() {
    this.selected = null;
  }

  switchCompleted(id: number, user: User) {
    if (user.enabled === true) {
      user.enabled = false;
    } else if (user.enabled === false) {
      user.enabled = true;
    }
    this.updateUser(id, user);
  }

  addUser(form: NgForm) {
    this.newUser = new User();

    // TODO need logic entered here.

    this.userService.create(this.newUser).subscribe(
      () => {
        this.reloadUsers();
      },
      err => {
        console.error('userComponent - addUser()');
        console.error(err);
      }
    );
    form.reset();
  }

  setEditUser() {
    this.editUser = Object.assign({}, this.selected);
  }

  cancelEditUser() {
    this.editUser = null;
  }

  updateUser(id: number, editedUser: User) {

    // TODO logic needs to be entered here

    this.userService.update(id, editedUser).subscribe(
      () => {
        this.reloadUsers();
      },
      err => {
        console.error('userComponent - updateUser()');
        console.error(err);
      }
    );
    this.editUser = null;
    this.selected = null;
  }

  deleteUser(id: number) {
    this.userService.destroy(id).subscribe(
      () => {
        this.reloadUsers();
      },
      err => {
        console.error('userComponent - deleteUser()');
        console.error(err);
      }
    );
    this.reloadUsers();
  }

  reloadUsers() {
    this.userService.index().subscribe(
      lifeIsGood => {
        this.users = lifeIsGood;
        if (this.urlUserId) {
          this.selected = this.users.find((data => data.id === Number(this.urlUserId)));
          if (!this.selected) {
            this.router.navigateByUrl('**');
          }
        }
      },
      lifeIsBad => {
        console.error('Error in UserComponent.reloadUsers()');
        console.error(lifeIsBad);
      }
    );
  }

  // TODO we dont need this but could utilize in a different way.

  // checkTotalUsers(): string {
  //   let classColor = '';
  //   if (this.showTotalUsers() >= 10) {
  //     classColor = 'badge badge-pill badge-danger';
  //   } else if (this.showTotalUsers() >= 5) {
  //     classColor = 'badge badge-pill badge-warning';
  //   } else if (this.showTotalUsers() < 5) {
  //     classColor = 'badge badge-pill badge-success';
  //   }
  //   return classColor;
  // }
}
