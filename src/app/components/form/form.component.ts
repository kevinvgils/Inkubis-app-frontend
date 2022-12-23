import { Component, Injector, OnInit } from '@angular/core';
import { ContractService } from 'src/app/contract/contract.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {
  contracts: any;
  constructor(readonly contractService: ContractService) {
    try {
      this.contracts = JSON.parse(localStorage.getItem('forms') || '[]');
    } catch (e: any) {
      this.contracts = [];
      console.error(e.message);
    }

    console.log(this.contracts);
  }

  ngOnInit(): void {}

  clearLocalStorage() {
    localStorage.removeItem('forms');
    window.location.reload();
  }

  ngOnSubmit(){
    //console
    this.contractService
    .contract(3, 1, this.contracts)
    .subscribe((contract) => {
      console.log(this.contracts);
      //contract.questions = Object.values(contract.questions).at(1);
     // pdf.company = Object.values(pdf.company).at(1);
      //this.staticUser = {
      //  ...JSON.parse(JSON.stringify(user)),
      //};
      /*this.pdf = {
        ...JSON.parse(JSON.stringify(pdf)),
      };*/
    });

    
  }
}
