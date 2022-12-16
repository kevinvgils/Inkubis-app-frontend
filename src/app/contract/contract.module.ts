import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContractRoutingModule } from './contract-routing.module';

import { ContractComponent } from './contract.component';
import { FirstPartComponent } from './first-part/first-part.component';
import { SecondPartComponent } from './second-part/second-part.component';


@NgModule({
  declarations: [
    ContractComponent,
    FirstPartComponent,
    SecondPartComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
