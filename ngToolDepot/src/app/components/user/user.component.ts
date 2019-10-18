import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // users: User[] = [];
  // newUser: User= new User();
  // selected: User = null;

  // constructor(private userService: UserService) { }

  ngOnInit() {
  }

  // addUser(form: NgForm) {
  //   this.userService.create(this.newUser).subscribe(
  //     data => {
  //       this.newUser = new User();
  //       form.reset();
  //       this.reload();
  //     },
  //     err => console.error('Error in UserComponent.addUser(): ' + err)
  //   );
  // }

  // updateUser(user: User) {
  //   this.userService.update(user).subscribe(
  //     data => {
  //       this.reload();
  //       this.selected = null;
  //     },
  //     err => console.error('Error in UserComponent.updateUser(): ' + err)
  //   );
  // }

  // deleteUser(id: number) {
  //   this.userService.destroy(id).subscribe(
  //     data => {
  //       this.reload();
  //     },
  //     err => {
  //       console.error('Error in Error in UserComponent.deleteUser():');
  //       console.error(err);
  //     }
  //   );
  // }

  // reload() {
  //   this.userService.index().subscribe(
  //     data => {
  //       this.user = data;
  //       if (this.urlUserId) {
  //         this.selected = this.user[parseInt(this.urlUserId, 10) - 1];
  //         this.urlUserId = '';
  //       }
  //     },
  //     err => {
  //       console.error('Error in UserComponent.reload');
  //       console.error(err);
  //     }
  //   );
  // }

}
