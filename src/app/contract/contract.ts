
import { FormGroup } from "@angular/forms";
import { IContract, CompanyResponsibleForDataProcessing, CompanyExecutingDataProcessing, EmployeeExecutingDataProcessing, CategoryOfSubjectsInvolved, CategoryOfDataInvolved, CategoryOfSpecialDataInvolved, ExternalSubEmployeeExecutingDataProcessing, ThirdPartySuppliers, DataTransfer, SinglePointOfContact } from "./contract.interface";

export class Contract {

    iContract: IContract;
    companyResponsibleForDataProcessing: CompanyResponsibleForDataProcessing;
    companyExecutingDataProcessing: CompanyExecutingDataProcessing;
    employeeExecutingDataProcessing: EmployeeExecutingDataProcessing;
    categoryOfSubjectsInvolved: CategoryOfSubjectsInvolved;
    categoryOfDataInvolved: CategoryOfDataInvolved;
    categoryOfSpecialDataInvolved: CategoryOfSpecialDataInvolved;
    externalSubEmployeeExecutingDataProcessing: ExternalSubEmployeeExecutingDataProcessing;
    thirdPartySuppliers: ThirdPartySuppliers;
    dataTransfer: DataTransfer;
    singlePointOfContact: SinglePointOfContact;


    constructor(form: FormGroup){
        // this.companyResponsibleForDataProcessing.name = form.value.contractinfo.companyResponsibleForDataProcessing.name;
        // this.companyResponsibleForDataProcessing.legalCountry;
        // this.companyResponsibleForDataProcessing.companyNumber;
        // this.companyResponsibleForDataProcessing.address;
        // this.companyResponsibleForDataProcessing.zipcode;
        // this.companyResponsibleForDataProcessing.city;
        // this.companyResponsibleForDataProcessing.countryOfResidence;

        // this.companyExecutingDataProcessing.name;
        // this.companyExecutingDataProcessing.legalCountry;
        // this.companyExecutingDataProcessing.companyNumber;
        // this.companyExecutingDataProcessing.address;
        // this.companyExecutingDataProcessing.zipcode;
        // this.companyExecutingDataProcessing.city;
        // this.companyExecutingDataProcessing.countryOfResidence;

        // this.iContract.dateSigned;
        // this.iContract.citySigned;

        // this.employeeExecutingDataProcessing.name;
        // this.employeeExecutingDataProcessing.jobDescription;
        // this.employeeExecutingDataProcessing.companyEmployedAt;

        // this.iContract.processingPurposes = form.value.processingpurposes.processingPurposes;

        // this.categoryOfSubjectsInvolved.category;
        // this.categoryOfSubjectsInvolved.involvedornot;

        // this.categoryOfDataInvolved.category;
        // this.categoryOfDataInvolved.involvedornot;

        // this.categoryOfSpecialDataInvolved.category;
        // this.categoryOfSpecialDataInvolved.involvedornot;

        // this.iContract.certifications;
        // this.iContract.achievedCertifications;
        // this.iContract.overhauls;

        // this.externalSubEmployeeExecutingDataProcessing.name;
        // this.externalSubEmployeeExecutingDataProcessing.formalCity;
        // this.externalSubEmployeeExecutingDataProcessing.address;
        // this.externalSubEmployeeExecutingDataProcessing.typeOfProcessingForPersonalData;
        // this.externalSubEmployeeExecutingDataProcessing.jobDescription;

        // this.thirdPartySuppliers.name;
        // this.thirdPartySuppliers.formalCity;
        // this.thirdPartySuppliers.address;
        // this.thirdPartySuppliers.descriptionOfSupply;
        // this.thirdPartySuppliers.linkToLegalTerms;

        // this.dataTransfer.legalCountry;
        // this.dataTransfer.nameOfExternalSubEmployee;
        // this.dataTransfer.reasonForDataTransfer;

        // this.singlePointOfContact.nameOfCompanyResponsibleForDataProcessing;
        // this.singlePointOfContact.jobDescriptionOfCompanyResponsibleForDataProcessing;
        // this.singlePointOfContact.emailOfCompanyResponsibleForDataProcessing;
        // this.singlePointOfContact.phoneOfCompanyResponsibleForDataProcessing;
        // this.singlePointOfContact.mobilePhoneOfCompanyResponsibleForDataProcessing;

        // this.singlePointOfContact.nameOfCompanyExecutingDataProcessing;
        // this.singlePointOfContact.jobDescriptionOfCompanyExecutingDataProcessing;
        // this.singlePointOfContact.emailOfCompanyExecutingDataProcessing;
        // this.singlePointOfContact.phoneOfCompanyExecutingDataProcessing;
        // this.singlePointOfContact.mobilePhoneOfCompanyExecutingDataProcessing;
    }
}

