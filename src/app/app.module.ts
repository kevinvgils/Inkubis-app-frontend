import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfComponent } from './pdf/pdf.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { httpInterceptorProviders } from './auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';
import { MatSelectModule} from '@angular/material/select'; 
import { LoggedInAuthGuard } from './auth/auth.guards';
import { ContractModule } from './contract/contract.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { ContractDetailComponent } from './homepage/contract-detail/contract-detail.component';
import { ContractEditComponent } from './homepage/contract-edit/contract-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PdfComponent,
    UsersComponent,
    UserDialogComponent,
    HomepageComponent,
    AdminComponent,
    ContractDetailComponent,
    ContractEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    ContractModule,
  ],
  entryComponents: [
    UserDialogComponent
  ],
  providers: [LoggedInAuthGuard, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
