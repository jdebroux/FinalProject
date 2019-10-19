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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddressService } from './services/address.service';
import { ReviewOfCustomerService } from './services/review-of-customer.service';
import { ReviewOfLenderService } from './services/review-of-lender.service';
import { ReviewOfRenterService } from './services/review-of-renter.service';
import { ReviewOfWorkerService } from './services/review-of-worker.service';
import { SkillRentalService } from './services/skill-rental.service';
import { SkillService } from './services/skill.service';
import { ToolPhotoService } from './services/tool-photo.service';
import { ToolRentalService } from './services/tool-rental.service';
import { ToolService } from './services/tool.service';
import { UserSkillService } from './services/user-skill.service';
import { UserService } from './services/user.service';
import { UserComponent } from './components/user/user.component';
import { ToolComponent } from './components/tool/tool.component';
import { ToolTransactionComponent } from './components/tool-transaction/tool-transaction.component';
import { AdminComponent } from './components/admin/admin.component';
import { SkillTransactionComponent } from './components/skill-transaction/skill-transaction.component';
import { SkillComponent } from './components/skill/skill.component';
import { DatePipe } from '@angular/common';
import { AddToolComponent } from './components/toolCRUD/add-tool/add-tool.component';
import { UpdateToolComponent } from './components/toolCRUD/update-tool/update-tool.component';
import { DeleteToolComponent } from './components/toolCRUD/delete-tool/delete-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    FooterComponent,
    ToolComponent,
    UserComponent,
    ToolTransactionComponent,
    AdminComponent,
    SkillTransactionComponent,
    SkillComponent,
    AddToolComponent,
    UpdateToolComponent,
    DeleteToolComponent,
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
    AuthService,
    AddressService,
    DatePipe,
    ReviewOfCustomerService,
    ReviewOfLenderService,
    ReviewOfRenterService,
    ReviewOfWorkerService,
    SkillRentalService,
    SkillService,
    ToolPhotoService,
    ToolRentalService,
    ToolService,
    UserSkillService,
    UserService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
