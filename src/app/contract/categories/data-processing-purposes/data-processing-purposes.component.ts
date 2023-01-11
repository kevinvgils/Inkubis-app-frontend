// Verwerkingsdoeleindes: string[] 

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-data-processing-purposes',
  templateUrl: './data-processing-purposes.component.html',
  styleUrls: ['./data-processing-purposes.component.css']
})
export class DataProcessingPurposesComponent implements OnInit {

  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('contractinfo') as FormGroup;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(JSON.stringify(this.form.value));
    this.router.navigate(['contract/certification']);
  }

}
