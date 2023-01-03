// Verwerkingsverantwoordelijke: 
  // Naam: string 
  // Functie: string 
  // Email: string 
  // Telefoon: string 
  // Mobiele telefoon: string 

// Verwerker: 
  // Naam: string 
  // Functie: string 
  // Email: string 
  // Telefoon 
  // Mobiele telefoon 

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-single-point-of-contact-data',
  templateUrl: './single-point-of-contact-data.component.html',
  styleUrls: ['./single-point-of-contact-data.component.css']
})
export class SinglePointOfContactDataComponent implements OnInit {

  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('spoc') as FormGroup;
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
