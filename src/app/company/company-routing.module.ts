import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';

import { CompanyComponent } from './company.component';

const routes: Routes = [
  { path: '',
    component: CompanyComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list'},
      { path: 'list', component: CompanyListComponent},
      { path: 'detail/:id', component: CompanyDetailComponent}
    ] }, 
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }