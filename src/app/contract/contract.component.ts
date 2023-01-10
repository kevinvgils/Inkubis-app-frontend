import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    'spoc',
    'verify',
  ];
  // components: string[] = [
  //   'Contract info',
  //   'Contract ondertekenaars',
  //   'Verwerkingsdoeleinden',
  //   'Certificatie',
  //   'Derde partij',
  //   'Gegevenscategorie',
  //   'SPOC',
  //   'Gegevenscontrole',
  // ];
  currentComp!: string;

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
    }),

    contractsignees: new FormGroup({
      companyResponsibleForDataProcessing: new FormGroup({
        member1: new FormGroup({
          name: new FormControl(''),
          jobDescription: new FormControl(''),
        }),
        member2: new FormGroup({
          name: new FormControl(''),
          jobDescription: new FormControl(''),
        }),
      }),
      companyExecutingDataProcessing: new FormGroup({
        member1: new FormGroup({
          name: new FormControl(''),
          jobDescription: new FormControl(''),
        }),
        member2: new FormGroup({
          name: new FormControl(''),
          jobDescription: new FormControl(''),
        }),
      }),
    }),

    processingpurposes: new FormGroup({
      processingPurposes: new FormControl(''),
    }),

    category: new FormGroup({
      dataSubjectCategory: new FormGroup({
        dummy: new FormControl(false),
      }),
      dataCategory: new FormGroup({
        IdentificationData: new FormControl(false),
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

    certification: new FormGroup({
      certifications: new FormControl(''),
      achievedCertifications: new FormControl(''),
      overhauls: new FormControl(''),
    }),

    thirdparty: new FormGroup({
      externalSubEmployeeExecutingDataProcessing: new FormGroup({
        name: new FormControl(''),
        formalCity: new FormControl(''),
        address: new FormControl(''),
        typeOfProcessingForPersonalData: new FormControl(''),
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
        name: new FormControl(''),
        jobDescription: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        mobile: new FormControl(''),
      }),

      CompanyExecutingDataProcessing: new FormGroup({
        name: new FormControl(''),
        jobDescription: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        mobile: new FormControl(''),
      }),
    }),
  });

  getForm() {
    return this.contractForm;
  }

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.link();
  }

  link(): void {
    this.currentComp = this.router.url.split('/').pop() as string;
  }
}
