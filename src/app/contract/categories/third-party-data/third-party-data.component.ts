// Externe subverwerkers: 
  // Naam: string 
  // Statutaire zetel: string 
  // Adres: string 
  // Aanduiding van verwerking persoonsgegevens: string 
  // Dienstomschrijving voor verwerker: string 

// Derde leveranciers: 
  // Naam: string 
  // Zetel: string 
  // Adres: string 
  // Beschrijving van de levering: string 
  // Eventueel link naar de voorwaarden: string 

// Doorgifte gegevens: 
  // Land: string 
  // Naam subverwerker: string -> Externe subverwerkers 
  // Basis van doorgifte: string 

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-third-party-data',
  templateUrl: './third-party-data.component.html',
  styleUrls: ['./third-party-data.component.css'],
})
export class ThirdPartyDataComponent implements OnInit {
  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('thirdparty') as FormGroup;
  }

  ngOnInit(): void {}

  onSubmit(){
    console.log(JSON.stringify(this.form.value));
    this.router.navigate(['contract/datasubjectcategory']);
  }
}