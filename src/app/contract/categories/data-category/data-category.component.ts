import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-data-category',
  templateUrl: './data-category.component.html',
  styleUrls: ['./data-category.component.css'],
})
export class DataCategoryComponent implements OnInit {
  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('category') as FormGroup;
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(JSON.stringify(this.form.value));
    this.router.navigate(['contract/specialdatacategory']);
  }
}
