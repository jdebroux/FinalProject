import { UserComponent } from './../components/user/user.component';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8089/';
  // private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  user: User = new User();

  login(username, password) {
    // Make credentials
    const credentials = this.generateBasicAuthCredentials(username, password);
    // Send credentials as Authorization header (this is spring security convention for basic auth)
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })

    };

    // create request to authenticate credentials
    return this.http.get(this.baseUrl + 'authenticate', httpOptions).pipe(
      tap(res => {
        localStorage.setItem('credentials', credentials);
        this.http.get(this.baseUrl + 'api/user/' + username + '/role', {responseType: 'text'}).subscribe(
          data => {
            return this.http.get<User>(this.baseUrl + 'api/user/' + username, httpOptions).subscribe(
              userData => {
                this.user = userData;
                localStorage.setItem('role', data);
                localStorage.setItem('user', username);
                localStorage.setItem('Object', JSON.stringify(this.user));
                this.router.navigateByUrl('/user');
              },
              catchError((err: any) => {
                console.log(err);
                return throwError('Error in user service -- getUserbyUsername');
              })
              );
            },
            err => {
              console.error(err);
            }
            );

        return res;

      }),
      catchError((err: any) => {
        return throwError('AuthService.login(): Error logging in.');
      })
    );
    // this.router.navigateByUrl('user');
  }

  register(user) {
    // create request to register a new account
    return this.http.post(this.baseUrl + 'register', user).pipe(
      catchError((err: any) => {
        return throwError('AuthService.register(): error registering user.');
      })
    );
  }

  logout() {
    // localStorage.removeItem('credentials');
    // localStorage.removeItem('role');
    localStorage.clear();
    // localStorage.removeItem('user');
    this.user = new User();
  }

  checkLogin() {
    if (localStorage.getItem('credentials')) {
      return true;
    }
    return false;
  }

  generateBasicAuthCredentials(username, password) {
    return btoa(`${username}:${password}`);
  }

  getCredentials() {
    return localStorage.getItem('credentials');
  }

  getUsername(): string {
    return localStorage.getItem('user');
  }

  returnUser() {
    return this.user;
  }
}
