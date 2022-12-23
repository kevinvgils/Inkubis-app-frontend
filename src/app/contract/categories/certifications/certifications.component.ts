// Certificeringen: string[] 
// Behaalde certificering: string 
// Audits, inspecties of interne controles: string[] 

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('firstPart') as FormGroup;
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
