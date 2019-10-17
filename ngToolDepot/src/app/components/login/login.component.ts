import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.auth.login(form.value.username, form.value.password).subscribe(
      next => {
        console.log('LoginComponent.login(): user logged in, routing to /home.');
        this.router.navigateByUrl('home');
      },
      error => {
        console.error('LoginComponent.login(): error logging in.');
      }
    );;
  }
}
