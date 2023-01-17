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
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/users/users.service';
import { Company, IContract } from '../../contract.interface';
import { ContractService } from '../../contract.service';
import { FormProvider } from '../../FormProvider';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.css'],
})
export class ContractInfoComponent implements OnInit {
  form: FormGroup;
  routeId: number = 0;
  contract: IContract;
  allCompanies: Company[] = [];

  constructor(private route: ActivatedRoute, private userService: UsersService, private authService: AuthService, private formProvider: FormProvider, private router: Router, private readonly contractService: ContractService, private categoryService: CategoryService) {
    this.form = formProvider.getForm() as FormGroup;
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.routeId = params['id'];
        this.categoryService.setRouteId(this.routeId);
        this.getContractById(this.routeId)
        console.log(this.routeId)
      }
    });
  }

  ngOnInit(): void {
    this.categoryService.setRouteId(0);

    const userTokenData = this.authService.decodeJwtToken(this.authService.getAuthorizationToken()!) as any;
    if(userTokenData['role'] == 'admin') {
      this.userService.getAllCompanies().subscribe(company => {
        this.allCompanies = company;
      })
    } else{
      this.userService.getAllCompaniesForUser(userTokenData['id']).subscribe(company => {
        this.allCompanies = company;
      })
    }

  }


  getContractById(id: number) {
    this.contractService.getContractById(id).subscribe((contract: IContract) => {
      this.contract = contract;
      console.log(this.contract);
      this.form.patchValue({
        contractinfo: { 
          companyId: this.contract.company.id,
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
            member2: {
              jobEmployee2ResponsibleForDP: this.contract.contractSignees.jobEmployee2ResponsibleForDP,
              nameEmployee2ResponsibleForDP: this.contract.contractSignees.nameEmployee2ResponsibleForDP,
            },
          },
          companyExecutingDataProcessing: {
            member1: {
              nameEmployee1ExecutingDP: this.contract.contractSignees.nameEmployee1ExecutingDP,
              jobEmployee1ExecutingDP: this.contract.contractSignees.jobEmployee1ExecutingDP,
            },
            member2: {
              nameEmployee2ExecutingDP: this.contract.contractSignees.nameEmployee2ExecutingDP,
              jobEmployee2ExecutingDP: this.contract.contractSignees.jobEmployee2ExecutingDP,
            },
          },
        },
        certifications: {
          ...this.contract.certifications
        },
        thirdparty: {
          externalSubEmployeeExecutingDataProcessing: {
            ...this.contract.thirdParty.TpProcessing
          },
          externalSubEmployeeExecutingDatathirdPartySuppliersProcessing: {
            ...this.contract.thirdParty.TpSupplier
          },
          dataTransfer: {
            ...this.contract.thirdParty.TpDataTransfer
          },
        },
        category: {
          dataCategory: {
            ...this.contract.categories.dataCategory
          },
          specialDataCategory: {
            ...this.contract.categories.specialDataCategory
          },
        },
        spoc: {
          CompanyResponsibleForDataProcessing: {
            ...this.contract.spoc
          },
          CompanyExecutingDataProcessing: {
            ...this.contract.spoc
          },
        },
      })
      console.log(this.form.value)
    });
  }

  onSubmit(){
    if (this.routeId == 0){
      this.router.navigate(['contract/contractsignees']);
    } else {
      console.log(this.routeId);
      this.router.navigate(['contract/edit/' + this.routeId + '/contractsignees']);
    }
  }
}
