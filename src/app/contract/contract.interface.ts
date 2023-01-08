export interface IContract {
    id: number;
    company: number;
    user: number;
    questions: object;

    dateSigned: Date;
    citySigned: string;

    processingPurposes: string[];

    certifications: string[];
    achievedCertifications: string;

    overhauls: string[];
  }

export interface CompanyResponsibleForDataProcessing extends IContract{
    name: string;
    legalCountry: boolean;
    companyNumber: string;
    address: string;
    zipcode: string;
    city: string;
    countryOfResidence: string;
    
}

export interface CompanyExecutingDataProcessing extends IContract{
    name: string;
    legalCountry: boolean;
    companyNumber: string;
    address: string;
    zipcode: string;
    city: string;
    countryOfResidence: string;



}

export interface EmployeeExecutingDataProcessing extends IContract{
    name: string;
    jobDescription: string;
    companyEmployedAt: string;

}

export interface CategoryOfSubjectsInvolved extends IContract {
    category: string;
    involvedornot: boolean;
    
}

export interface CategoryOfDataInvolved extends IContract {
    category: string;
    involvedornot: boolean;
    
}

export interface CategoryOfSpecialDataInvolved extends IContract {
    category: string;
    involvedornot: boolean;
    
}

export interface ExternalSubEmployeeExecutingDataProcessing extends IContract{
    name: string;
    formalCity: string;
    address: string;
    typeOfProcessingForPersonalData: string;
    jobDescription: string;
    

}

export interface ThirdPartySuppliers extends IContract {
    name: string;
    formalCity: string;
    address: string;
    descriptionOfSupply: string;
    linkToLegalTerms: string;
}

export interface DataTransfer extends IContract {
    legalCountry: string;
    nameOfExternalSubEmployee: ExternalSubEmployeeExecutingDataProcessing["name"];
    reasonForDataTransfer: string;
}

export interface SinglePointOfContact extends IContract {
    nameOfCompanyResponsibleForDataProcessing: string;
    jobDescriptionOfCompanyResponsibleForDataProcessing: string;
    emailOfCompanyResponsibleForDataProcessing: string;
    phoneOfCompanyResponsibleForDataProcessing: string;
    mobilePhoneOfCompanyResponsibleForDataProcessing: string;

    nameOfCompanyExecutingDataProcessing: string;
    jobDescriptionOfCompanyExecutingDataProcessing: string;
    emailOfCompanyExecutingDataProcessing: string;
    phoneOfCompanyExecutingDataProcessing: string;
    mobilePhoneOfCompanyExecutingDataProcessing: string;
}
