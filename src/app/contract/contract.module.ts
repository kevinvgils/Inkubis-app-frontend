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


@NgModule({
  declarations: [
    ContractComponent,
    FirstPartComponent,
    SecondPartComponent,
    ControllerDataComponent,
    ProcessorComponent,
    ProcessorDataComponent,
    ContractInfoComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
