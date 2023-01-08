import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/contract/contract.service';
import { FormProvider } from 'src/app/contract/FormProvider';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  contracts: any;
  form: FormGroup;
  
  constructor(private formProvider: FormProvider, private router: Router, readonly contractService: ContractService) {
    this.form = formProvider.getForm() as FormGroup;
    console.log(JSON.stringify(this.form.value));

    try {
      this.contracts = JSON.parse(localStorage.getItem('forms') || '[]');
    } catch (e: any) {
      this.contracts = [];
      console.error(e.message);
    }
  }

  ngOnInit(): void {
  }

}
