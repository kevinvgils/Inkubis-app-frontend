import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  contracts: any;

  form: FormGroup;

  constructor(private formProvider: FormProvider, private router: Router
    ) {
    this.form = formProvider.getForm().get('secondPart') as FormGroup;
    console.log(localStorage.getItem('forms'));
    try {
      this.contracts = JSON.parse(localStorage.getItem('forms') || '[]');
    } catch (e:any) {
      this.contracts = [];
      console.error(e.message);
    };
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.formProvider.getForm().get('firstPart')){
      const allForms = this.formProvider.getForm() as FormGroup;

      let contract = new Contract(allForms);
      this.contracts.push(contract);

      localStorage.setItem('forms', JSON.stringify(this.contracts));
      this.router.navigate(['']);
    }
  }
 
}
