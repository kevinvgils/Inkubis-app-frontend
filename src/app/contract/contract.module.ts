import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContractRoutingModule } from './contract-routing.module';

import { ContractComponent } from './contract.component';
import { FirstPartComponent } from './first-part/first-part.component';
import { SecondPartComponent } from './second-part/second-part.component';
import { ControllerDataComponent } from './controller-data/controller-data.component';
import { ProcessorComponent } from './processor/processor.component';
import { ProcessorDataComponent } from './processor-data/processor-data.component';
import { ContractInfoComponent } from './contract-info/contract-info.component';
import { DataProcessingPurposesComponent } from './data-processing-purposes/data-processing-purposes.component';
import { ThirdPartyDataComponent } from './third-party-data/third-party-data.component';
import { DataSubjectCategoryComponent } from './data-subject-category/data-subject-category.component';
import { DataCategoryComponent } from './data-category/data-category.component';
import { SpecialdataCategoryComponent } from './specialdata-category/specialdata-category.component';
import { SpecialDataCategoryComponent } from './special-data-category/special-data-category.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SinglePointOfContactDataComponent } from './single-point-of-contact-data/single-point-of-contact-data.component';


@NgModule({
  declarations: [
    ContractComponent,
    FirstPartComponent,
    SecondPartComponent,
    ControllerDataComponent,
    ProcessorComponent,
    ProcessorDataComponent,
    ContractInfoComponent,
    DataProcessingPurposesComponent,
    ThirdPartyDataComponent,
    DataSubjectCategoryComponent,
    DataCategoryComponent,
    SpecialdataCategoryComponent,
    SpecialDataCategoryComponent,
    CertificationsComponent,
    SinglePointOfContactDataComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
