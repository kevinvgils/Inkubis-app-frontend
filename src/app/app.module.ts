import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { VerifyComponent } from './components/verify/verify.component';
import { PdfComponent } from './pdf/pdf.component';
import { ContractSigneesComponent } from './contract/contract-signees/contract-signees.component';

@NgModule({
  declarations: [AppComponent, FormComponent, VerifyComponent, PdfComponent, ContractSigneesComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
