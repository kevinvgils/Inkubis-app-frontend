import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contract } from '../contract';
import { FormProvider } from '../FormProvider';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
})
export class VerifyComponent implements OnInit {
  contracts: any;
  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm() as FormGroup;
    console.log(JSON.stringify(this.form.value));

    try {
      this.contracts = JSON.parse(localStorage.getItem('forms') || '[]');
    } catch (e: any) {
      this.contracts = [];
      console.error(e.message);
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    const allForms = this.formProvider.getForm() as FormGroup;

    let contract = new Contract(allForms);
    this.contracts.push(contract);

    localStorage.setItem('forms', JSON.stringify(this.contracts));
    this.router.navigate(['..']);
  }
}
