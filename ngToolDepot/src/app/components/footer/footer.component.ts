import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  checkIfLoggedInUser(): boolean {
    return this.auth.checkLogin();
  }

  getUsername(): string{
    return this.auth.getUsername();
  }
}
