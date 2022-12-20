import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormProvider } from '../FormProvider';

@Component({
  selector: 'app-second-part',
  templateUrl: './second-part.component.html',
  styleUrls: ['./second-part.component.css'],
})
export class SecondPartComponent implements OnInit {
  @Input()
  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('secondPart') as FormGroup;
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(JSON.stringify(this.form.value));
    this.router.navigate(['contract/verify']);
  }
}
