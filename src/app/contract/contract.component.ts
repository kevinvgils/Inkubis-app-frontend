import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormProvider } from './FormProvider';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
  providers: [{ provide: FormProvider, useExisting: ContractComponent }]
})
export class ContractComponent extends FormProvider implements OnInit {

  components: string[] = ['FirstPart', 'SecondPart'];

  contractForm = new FormGroup({
    firstPart: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    }),
    secondPart: new FormGroup({
      cardNumber: new FormControl('', Validators.required),
      CVC: new FormControl('', Validators.required),
    })
  })

  getForm() {
    return this.contractForm;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
