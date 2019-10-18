import { Router } from '@angular/router';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFail = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login(form.value.username, form.value.password).subscribe(
      lifeIsGood => {
        console.log(localStorage.getItem);
        this.router.navigateByUrl('/home');
      },
        error => {
          form.reset();
          this.loginFail = 'Something';
          console.log('Error in loginComponent.login()');
          console.log(error);
        }
    );
  }

}
