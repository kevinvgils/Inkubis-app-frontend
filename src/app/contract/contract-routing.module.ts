import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInAuthGuard } from '../auth/auth.guards';
import { ContractComponent } from './contract.component';
import { ContractInfoComponent } from './categories/contract-info/contract-info.component';
import { ContractSigneesComponent } from './categories/contract-signees/contract-signees.component';
import { ThirdPartyDataComponent } from './categories/third-party-data/third-party-data.component';
import { SinglePointOfContactDataComponent } from './categories/single-point-of-contact-data/single-point-of-contact-data.component';
import { CertificationsComponent } from './categories/certifications/certifications.component';
import { DataProcessingPurposesComponent } from './categories/data-processing-purposes/data-processing-purposes.component';
import { VerifyComponent } from './verify/verify.component';
import { DataCategoryComponent } from './categories/data-category/data-category.component';
import { DataSubjectCategoryComponent } from './categories/data-subject-category/data-subject-category.component';
import { SpecialDataCategoryComponent } from './categories/special-data-category/special-data-category.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedInAuthGuard],
    component: ContractComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'contractinfo' },
      { path: 'contractinfo', component: ContractInfoComponent },
      { path: 'edit/:id/contractinfo', component: ContractInfoComponent },
      { path: 'contractsignees', component: ContractSigneesComponent },
      { path: 'edit/:id/contractsignees', component: ContractSigneesComponent },
      { path: 'processingpurposes',component: DataProcessingPurposesComponent},
      { path: 'edit/:id/processingpurposes',component: DataProcessingPurposesComponent},
      { path: 'datasubjectcategory', component: DataSubjectCategoryComponent },
      { path: 'edit/:id/datasubjectcategory', component: DataSubjectCategoryComponent },
      { path: 'datacategory', component: DataCategoryComponent },
      { path: 'edit/:id/datacategory', component: DataCategoryComponent },
      { path: 'specialdatacategory', component: SpecialDataCategoryComponent },
      { path: 'edit/:id/specialdatacategory', component: SpecialDataCategoryComponent },
      { path: 'certification', component: CertificationsComponent },
      { path: 'edit/:id/certification', component: CertificationsComponent },
      { path: 'thirdparty', component: ThirdPartyDataComponent },
      { path: 'edit/:id/thirdparty', component: ThirdPartyDataComponent },
      { path: 'spoc', component: SinglePointOfContactDataComponent },
      { path: 'edit/:id/spoc', component: SinglePointOfContactDataComponent },
      { path: 'verify', component: VerifyComponent },
      { path: 'edit/:id/verify', component: VerifyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractRoutingModule {}
