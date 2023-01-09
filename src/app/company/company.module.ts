import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';

@NgModule({
  declarations: [CompanyComponent, CompanyListComponent, CompanyDetailComponent],
  imports: [CommonModule, CompanyRoutingModule, ReactiveFormsModule],
})
export class CompanyModule {}
