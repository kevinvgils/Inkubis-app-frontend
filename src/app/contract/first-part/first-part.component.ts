import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../FormProvider';

@Component({
  selector: 'app-first-part',
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.css'],
})
export class FirstPartComponent implements OnInit {
  @Input()
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
