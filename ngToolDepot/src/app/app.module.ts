import { FooterComponent } from './components/footer/footer.component';
import { MDBBootstrapModule, ButtonsModule, InputsModule} from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ToolComponent } from './components/tool/tool.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    UserComponent,
    TransactionComponent,
    ToolComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    InputsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
