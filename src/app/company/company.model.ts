import { Contract } from "../contract/contract";

export class Company {

    id!: number;
    name!: string;
    country: string;
    zipcode: string;
    address: string;
    city: string;
    kvkNumber: string;
    imageURL: string;
    contracts?: Contract[];

}