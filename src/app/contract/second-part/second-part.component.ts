import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contract } from '../contract';
import { FormData } from '../FormData';
import { FormProvider } from '../FormProvider';

@Component({
  selector: 'app-second-part',
  templateUrl: './second-part.component.html',
  styleUrls: ['./second-part.component.css']
})
export class SecondPartComponent implements OnInit {

  @Input()
  initialForm!: FormGroup;
  contracts!: FormData;

  form: FormGroup;

  constructor(private formProvider: FormProvider
    ) {
    this.form = formProvider.getForm().get('secondPart') as FormGroup;
    this.contracts = JSON.parse(localStorage.getItem('forms') || '[]')
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.formProvider.getForm().get('firstPart')){
      const allForms = this.formProvider.getForm() as FormGroup;
      console.log(allForms);
      let contract = new Contract(allForms);

      this.contracts.addContract(contract);
      
      localStorage.setItem('forms', JSON.stringify(this.contracts.contracts));
    }
  }

}
