import { Router } from '@angular/router';
import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    var newUser = new User();
    newUser = form.value;
    this.auth.register(newUser).subscribe(
      data => {
        console.log('RegisterComponent.register(): user registered.');
        this.auth.login(newUser.username, newUser.password).subscribe(
          next => {
            console.log('RegisterComponent.register(): user logged in, routing to /todo.');
            this.router.navigateByUrl('home');
          },
          error => {
            console.error('RegisterComponent.register(): error logging in.');
          }
        );
      },
      err => {
        console.error('RegisterComponent.register(): error registering.');
        console.error(err);
      }
    );
  }
}
