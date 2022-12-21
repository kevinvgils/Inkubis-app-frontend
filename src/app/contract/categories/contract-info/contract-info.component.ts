// Verwerkingsverantwoordelijke 
  // Wettelijke (bedrijfs-) naam van verwerkingsverantwoordelijke - string 
  // Land wetgeving (Nederland of België) - boolean 
  // Ondernemingsnummer - string 
  // Adres - string 
  // Postcode - string 
  // Plaats - string 
  // Land - string 

// Verwerker 
  // Wettelijke (bedrijfs-) naam van verwerker - string 
  // Land (Nederland of België) - boolean 
  // Ondernemingsnummer - string 
  // Adres - string 
  // Postcode - string 
  // Plaats - string 
  // Land – string 

// Datum ondertekent – Date 
// Plaats ondertekent – string 

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.css']
})
export class ContractInfoComponent implements OnInit {

  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('firstPart') as FormGroup;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(JSON.stringify(this.form.value));
    this.router.navigate(['contract/secondpart']);
  }
}
