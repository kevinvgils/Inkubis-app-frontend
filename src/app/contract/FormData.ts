import { FormGroup } from "@angular/forms";
import { Contract } from "./contract";

export abstract class FormData {
    
    contracts: Contract[] = [];

    constructor(){
        
    }

    addContract(contract : Contract): void{
        this.contracts.push(contract);
    }
}