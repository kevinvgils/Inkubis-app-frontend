import { Company } from '../company/company.model';

export class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  emailAddress: string = '';
  role: string = '';
  companies: Company[] = [];

  constructor(firstName = '', lastName = '', emailAdress = '') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAdress;
  }
}
