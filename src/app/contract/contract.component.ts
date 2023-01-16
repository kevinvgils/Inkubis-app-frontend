import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IContract } from './contract.interface';
import { ActivatedRoute, Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { ContractService } from './contract.service';
import { FormProvider } from './FormProvider';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
  providers: [{ provide: FormProvider, useExisting: ContractComponent }],
})
export class ContractComponent extends FormProvider implements OnInit {
  components: string[] = [
    'contractinfo',
    'contractsignees',
    'processingpurposes',
    'certification',
    'thirdparty',
    'datasubjectcategory',
    'datacategory',
    'specialdatacategory',
    'spoc',
    'verify',
  ];
  // components: string[] = [
  //   'Contract info',
  //   'Contract ondertekenaars',
  //   'Verwerkingsdoeleinden',
  //   'Certificatie',
  //   'Derde partij',
  //   'Categorie betrokkenen',
  //   'Gegevenscategorie',
  //   'Speciale gegevenscategorie',
  //   'SPOC',
  //   'Gegevenscontrole',
  // ];
  currentComp!: string;
  contract!: IContract;
  routeId: number = 0;

  contractForm = new FormGroup({
    contractinfo: new FormGroup({
      companyResponsibleForDataProcessing: new FormGroup({
        name: new FormControl(''),
        companyNumber: new FormControl(''),
        legalCountry: new FormControl(false),
        address: new FormControl(''),
        zipcode: new FormControl(''),
        city: new FormControl(''),
        countryOfResidence: new FormControl(''),
      }),
      companyExecutingDataProcessing: new FormGroup({
        name: new FormControl(''),
        companyNumber: new FormControl(''),
        legalCountry: new FormControl(false),
        address: new FormControl(''),
        zipcode: new FormControl(''),
        city: new FormControl(''),
        countryOfResidence: new FormControl(''),
      }),
      dateSigned: new FormControl(''),
      citySigned: new FormControl(''),
      processingPurposes: new FormControl(''),
    }),

    contractSignees: new FormGroup({
      companyResponsibleForDataProcessing: new FormGroup({
        member1: new FormGroup({
          nameEmployee1ResponsibleForDP: new FormControl(''),
          jobEmployee1ResponsibleForDP: new FormControl(''),
        }),
        member2: new FormGroup({
          nameEmployee2ResponsibleForDP: new FormControl(''),
          jobEmployee2ResponsibleForDP: new FormControl(''),
        }),
      }),
      companyExecutingDataProcessing: new FormGroup({
        member1: new FormGroup({
          nameEmployee1ExecutingDP: new FormControl(''),
          jobEmployee1ExecutingDP: new FormControl(''),
        }),
        member2: new FormGroup({
          nameEmployee2ExecutingDP: new FormControl(''),
          jobEmployee2ExecutingDP: new FormControl(''),
        }),
      }),
    }),
    category: new FormGroup({
      dataSubjectCategory: new FormGroup({
        potentialOrFormerCustomers: new FormControl(false),
        applicantsAndFormerEmployeesInterns: new FormControl(false),
        potentialIndependentAdvisors: new FormControl(false),
        potentialFormerSuppliers: new FormControl(false),
        potentialBusinessPartners: new FormControl(false),
        minors: new FormControl(false),
        otherCategory: new FormControl(false),
      }),
      dataCategory: new FormGroup({
        identificationData: new FormControl(false),
        nationalRegistryNumber: new FormControl(false),
        communicationsData: new FormControl(false),
        relationalData: new FormControl(false),
        professionalData: new FormControl(false),
        locationData: new FormControl(false),
        financialData: new FormControl(false),
        financialAndInsuranceProducts: new FormControl(false),
        stigmatizationOrIsolationData: new FormControl(false),
        lifestyleAndHabits: new FormControl(false),
        loginData: new FormControl(false),
        identityFraudData: new FormControl(false),
        specialLegalDutyOfConfidentialityAndProfessionalSecrecyData:
          new FormControl(false),
        contractualData: new FormControl(false),
        imageOrSoundRecording: new FormControl(false),
        otherCategory: new FormControl(false),
      }),
      specialDataCategory: new FormGroup({
        racialOrEthnicData: new FormControl(false),
        geneticData: new FormControl(false),
        trafficRecordsAndPersonalData: new FormControl(false),
      }),
    }),

    certifications: new FormGroup({
      certifications: new FormControl(''),
      achievedCertifications: new FormControl(''),
      overhauls: new FormControl(''),
    }),

    thirdparty: new FormGroup({
      externalSubEmployeeExecutingDataProcessing: new FormGroup({
        name: new FormControl(''),
        formalCity: new FormControl(''),
        address: new FormControl(''),
        typeProcessingPersonalData: new FormControl(''),
        jobDescription: new FormControl(''),
      }),

      externalSubEmployeeExecutingDatathirdPartySuppliersProcessing:
        new FormGroup({
          name: new FormControl(''),
          formalCity: new FormControl(''),
          address: new FormControl(''),
          descriptionOfSupply: new FormControl(''),
          linkToLegalTerms: new FormControl(''),
        }),

      dataTransfer: new FormGroup({
        legalCountry: new FormControl(''),
        nameOfExternalSubEmployee: new FormControl(''),
        reasonForDataTransfer: new FormControl(''),
      }),
    }),

    spoc: new FormGroup({
      CompanyResponsibleForDataProcessing: new FormGroup({
        nameR: new FormControl(''),
        jobDescR: new FormControl(''),
        emailR: new FormControl(''),
        phoneR: new FormControl(''),
        mobileR: new FormControl(''),
      }),

      CompanyExecutingDataProcessing: new FormGroup({
        nameE: new FormControl(''),
        jobDescE: new FormControl(''),
        emailE: new FormControl(''),
        phoneE: new FormControl(''),
        mobileE: new FormControl(''),
      }),
    }),
  });

  getForm() {
    return this.contractForm;
  }
  constructor(private route: ActivatedRoute, private router: Router, readonly contractService: ContractService) {
    super();
    this.router.events
  .subscribe(
    (event: NavigationEvent) => {
      if(event instanceof NavigationStart) {
        console.log(event);
        this.currentComp = this.contractService.contractCreateNextLinking(this.router.url.split('/').pop() as string, false)
      }
    });
    
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.routeId = params['id'];
      }
    })
    this.link();
  }

  link(): void {
    this.currentComp = this.contractService.contractCreateNextLinking(this.router.url.split('/').pop() as string);
  }
}
