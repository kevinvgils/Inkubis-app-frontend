import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContractRoutingModule } from './contract-routing.module';

import { ContractComponent } from './contract.component';
import { FirstPartComponent } from './first-part/first-part.component';
import { SecondPartComponent } from './second-part/second-part.component';
import { VerifyComponent } from './verify/verify.component';
import { ContractSigneesComponent } from './categories/contract-signees/contract-signees.component';
import { ContractInfoComponent } from './categories/contract-info/contract-info.component';
import { DataProcessingPurposesComponent } from './categories/data-processing-purposes/data-processing-purposes.component';
import { ThirdPartyDataComponent } from './categories/third-party-data/third-party-data.component';
import { DataSubjectCategoryComponent } from './categories/data-subject-category/data-subject-category.component';
import { DataCategoryComponent } from './categories/data-category/data-category.component';
import { SpecialDataCategoryComponent } from './categories/special-data-category/special-data-category.component';
import { CertificationsComponent } from './categories/certifications/certifications.component';
import { SinglePointOfContactDataComponent } from './categories/single-point-of-contact-data/single-point-of-contact-data.component';

@NgModule({
  declarations: [
    ContractSigneesComponent,
    ContractComponent,
    FirstPartComponent,
    SecondPartComponent,
    VerifyComponent,
    ContractInfoComponent,
    DataProcessingPurposesComponent,
    ThirdPartyDataComponent,
    DataSubjectCategoryComponent,
    DataCategoryComponent,
    SpecialDataCategoryComponent,
    CertificationsComponent,
    SinglePointOfContactDataComponent,
  ],
  imports: [CommonModule, ContractRoutingModule, ReactiveFormsModule],
})
export class ContractModule {}
