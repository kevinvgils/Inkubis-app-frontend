//#2
// Verwerkingsmedewerker 
  // Naam medewerker – string 
  // Functietitel medewerker – string 
  // Bedrijf medewerker – company 

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-contract-signees',
  templateUrl: './contract-signees.component.html',
  styleUrls: ['./contract-signees.component.css']
})
export class ContractSigneesComponent implements OnInit {

  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('contractsignees') as FormGroup;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(JSON.stringify(this.form.value));
    this.router.navigate(['contract/processingpurposes']);
  }

}
