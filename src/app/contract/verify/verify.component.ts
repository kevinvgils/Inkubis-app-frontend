import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../FormProvider';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
})
export class VerifyComponent implements OnInit {
  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('firstPart') as FormGroup;
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(JSON.stringify(this.form.value));
    this.router.navigate(['contract/secondpart']);
  }
}
