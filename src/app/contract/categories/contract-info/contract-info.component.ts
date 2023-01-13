//#1
// Verwerkingsverantwoordelijke
  // Wettelijke Bedrijfsnaam van verwerkingsverantwoordelijke - string
  // Land wetgeving (Nederland of België) - boolean
  // Ondernemingsnummer - string
  // Adres - string
  // Postcode - string
  // Plaats - string
  // Land - string

// Verwerker
  // Wettelijke Bedrijfsnaam van verwerker - string
  // Land (Nederland of België) - boolean
  // Ondernemingsnummer - string
  // Adres - string
  // Postcode - string
  // Plaats - string
  // Land – string

// Datum ondertekent – Date
// Plaats ondertekent – string

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IContract } from '../../contract.interface';
import { ContractService } from '../../contract.service';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.css'],
})
export class ContractInfoComponent implements OnInit {
  form: FormGroup;
  routeId: number = 0;
  contract: IContract;

  constructor(private route: ActivatedRoute, private formProvider: FormProvider, private router: Router, private readonly contractService: ContractService ) {
    this.form = formProvider.getForm() as FormGroup;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.routeId = params['id'];
      console.log(this.routeId); // Print the parameter to the console.
      this.getContractById(this.routeId) 
    });
  }

  getContractById(id: number) {
    this.contractService.getContractById(id).subscribe((contract: IContract) => {
      this.contract = contract;
      console.log(this.contract.contractSignees.nameEmployee1ResponsibleForDP)
      console.log(this.contract)
      this.form.patchValue({
        contractinfo: { 
          companyResponsibleForDataProcessing: {
            ...this.contract.companyResponsibleForDP
          },
          companyExecutingDataProcessing: {
            ...this.contract.companyExecutingDP
          },
          dateSigned: this.contract.dateSigned,
          citySigned: this.contract.citySigned,
          processingPurposes: this.contract.processingPurposes,
        },
        contractSignees: {
          companyResponsibleForDataProcessing: {
            member1: {
              jobEmployee1ResponsibleForDP: this.contract.contractSignees.jobEmployee1ResponsibleForDP,
              nameEmployee1ResponsibleForDP: this.contract.contractSignees.nameEmployee1ResponsibleForDP,
            },
            // member2: {
            //   ...this.contract.contractSignees
            // }
          }

        }
      })
      console.log(this.form.value)
    });
  }

  onSubmit(){
    if (this.routeId != 0){
      this.router.navigate(['contract/edit/' + this.routeId + '/contractsignees']);
    } else {
      console.log(+this.route.snapshot.paramMap.get('id')!);
      this.router.navigate(['contract/contractsignees']);
    }
  }
}
