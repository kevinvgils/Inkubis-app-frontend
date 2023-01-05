import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfComponent } from './pdf/pdf.component';
import { LoggedInAuthGuard } from './components/auth/auth.guards';
import { UsersComponent } from './users/users.component';
import { httpInterceptorProviders } from './components/auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    RegisterComponent,
    PdfComponent,
    UsersComponent,
    UserDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    UserDialogComponent
  ],
  providers: [LoggedInAuthGuard, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
