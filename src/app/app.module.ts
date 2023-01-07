import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfComponent } from './pdf/pdf.component';
import { LoggedInAuthGuard } from './auth/auth.guards';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    RegisterComponent,
    PdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoggedInAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
