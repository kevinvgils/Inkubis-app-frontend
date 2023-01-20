import { Company } from '../company/company.model';

export interface ILogin {
  emailAddress: string;
  password: string;
}

export interface IToken {
  id: number;
  emailAddress: string;
  token: string;
}

export interface IRegister {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  phoneNumber: string;
  isAdmin: boolean;
  role: string;
  companies: Company[];
}

export type Id = string;
export type ResourceId = { id: Id };
