import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProvider } from '../FormProvider';

@Component({
  selector: 'app-first-part',
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.css']
})
export class FirstPartComponent implements OnInit {

  form: FormGroup;

  constructor(private formProvider: FormProvider) {
    this.form = formProvider.getForm().get('firstPart') as FormGroup;
  }
  
  ngOnInit(): void {
  }

}
