import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public navbarCollapse = true;
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

