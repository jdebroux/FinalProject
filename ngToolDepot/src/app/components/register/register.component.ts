import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFail = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    console.log(form);
    const user: User = form.value;
    this.authService.register(user).subscribe(
      lifeIsGood => {
        this.authService.login(user.username, user.password).subscribe(
          next => {
            this.router.navigateByUrl('/todo');
          },
           error => {
            console.error('Error in RegisterComponent.register.login()');
            console.error(error);
           }
        );
      },
      lifeIsBad => {
        console.error('Error in RegisterComponent.register()');
        console.error(lifeIsBad);
        this.registerFail = 'Something';
      }
    );
  }

}
