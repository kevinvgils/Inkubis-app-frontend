import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProvider } from './FormProvider';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
  providers: [{ provide: FormProvider, useExisting: ContractComponent }],
})
export class ContractComponent extends FormProvider implements OnInit {
  components: string[] = ['firstpart', 'secondpart', 'verify'];
  currentComp!: string;

  contractForm = new FormGroup({
    firstPart: new FormGroup({
      firstQuestion: new FormControl(false),
      secondQuestion: new FormControl(false),
    }),
    secondPart: new FormGroup({
      thirdQuestion: new FormControl(false),
      lastQuestion: new FormControl(false),
    }),
  });

  getForm() {
    return this.contractForm;
  }

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.link();
  }

  link(): void {
    this.currentComp = this.router.url.split('/').pop() as string;
  }
}
