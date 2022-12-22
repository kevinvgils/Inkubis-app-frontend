import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './company.component';

const routes: Routes = [
  { path: '',
    component: CompanyComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: '', pathMatch: 'full', redirectTo: 'detail'}
    ] }, 
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }