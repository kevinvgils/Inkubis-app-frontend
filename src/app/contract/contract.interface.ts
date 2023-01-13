export interface IContract {
    id: number;
    dateSigned: Date;
    citySigned: string;
    processingPurposes: string;
    companyExecutingDP: CompanyExecutingDP;
    companyResponsibleForDP: CompanyResponsibleForDP
    contractSignees: ContractSignees;
    thirdParty: ThirdParty;
    certifications: Certifications;
    spoc: Spoc;
    company: Company
    categories: Categories
}

export interface CompanyExecutingDP{
    id: number;
    name: string;
    companyNumber: string;
    legalCountry: boolean;
    address: string;
    zipcode: string;
    city: string;
    countryOfResidence: string;
}

export interface CompanyResponsibleForDP{
    id: number;
    name: string;
    companyNumber: string;
    legalCountry: boolean;
    address: string;
    zipcode: string;
    city: string;
    countryOfResidence: string;
}

export interface ContractSignees{
    id: number;
    nameEmployee1ResponsibleForDP:  string;
    jobEmployee1ResponsibleForDP: string
    nameEmployee2ResponsibleForDP: string;
    jobEmployee2ResponsibleForDP: string;
    nameEmployee1ExecutingDP: string;
    jobEmployee1ExecutingDP: string;
    nameEmployee2ExecutingDP: string;
    jobEmployee2ExecutingDP: string;
}

export interface ThirdParty{
    id: number;
    TpProcessing: {
        id: number;
        name: string;
        formalCity: string;
        address: string;
        typeProcessingPersonalData: string;
        jobDescription: string
    }
    TpSupplier: {
        id: number;
        name: string;
        formalCity: string;
        address: string;
        descriptionOfSupply: string;
        linkToLegalTerms: string;
    }
    TpDataTransfer: {
        id: number;
        legalCountry: string;
        nameOfExternalSubEmployee: string;
        reasonForDataTransfer: string;
    }
}

export interface Certifications{
    id: number;
    certifications: string;
    achievedCertifications: string;
    overhauls: string;
}

export interface Spoc{
    id: number;
    nameE: string;
    jobDescE: string;
    emailE: string;
    phoneE: string;
    mobileE: string;
    nameR: string;
    jobDescR: string;
    emailR: string
    phoneR: string;
    mobileR: string;
}

export interface Company{
    id: number;
    name: string;
}

export interface Categories{
    id: number;
    dataSubjectCategory: {
        id: number;
        potentialOrFormerCustomers: boolean;
        applicantsAndFormerEmployeesInterns: boolean;
        potentialIndependentAdvisors: boolean;
        potentialFormerSuppliers: boolean;
        potentialBusinessPartners: boolean;
        minors: boolean;
        otherCategory: boolean;
    }
    dataCategory: {
        id: number;
        identificationData: boolean;
        nationalRegistryNumber: boolean;
        communicationsData: boolean;
        relationalData: boolean;
        professionalData: boolean;
        locationData: boolean;
        financialData: boolean;
        financialAndInsuranceProducts: boolean;
        stigmatizationOrIsolationData: boolean;
        lifestyleAndHabits: boolean;
        loginData: boolean;
        identityFraudData: boolean;
        specialLegalDutyOfConfidentialityAndProfessionalSecrecyData: boolean;
        contractualData: boolean;
        imageOrSoundRecording: boolean;
        otherCategory: boolean;
    }
    specialDataCategory: {
        id: number
        racialOrEthnicData: boolean;
        geneticData: boolean;
        trafficRecordsAndPersonalData: boolean;
    }
}
