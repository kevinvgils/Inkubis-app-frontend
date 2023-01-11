import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-special-data-category',
  templateUrl: './special-data-category.component.html',
  styleUrls: ['./special-data-category.component.css'],
})
export class SpecialDataCategoryComponent implements OnInit {
  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('category') as FormGroup;
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(JSON.stringify(this.form.value));
    this.router.navigate(['contract/spoc']);
  }
}
