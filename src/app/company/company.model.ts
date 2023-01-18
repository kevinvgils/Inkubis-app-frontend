import { Contract } from '../contract/contract';

export class Company {
  id: number = 0;
  name: string = '';
  country: string = '';
  zipcode: string = '';
  address: string = '';
  city: string = '';
  kvkNumber: string = '';
  imageBase64Code: string = '';
  image?: File;
  contracts?: Contract[];
}
