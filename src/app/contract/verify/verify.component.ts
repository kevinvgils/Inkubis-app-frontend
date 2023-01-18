import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '../contract';
import { ContractService } from '../contract.service';
import { FormProvider } from '../FormProvider';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
})
export class VerifyComponent implements OnInit {
  contracts: any;
  form: FormGroup;
  routeId: number = 0;

  constructor(private route: ActivatedRoute, private formProvider: FormProvider, private router: Router, readonly contractService: ContractService) {
    this.form = this.formProvider.getForm() as FormGroup;
    console.log(JSON.stringify(this.form.value));

    this.route.params.subscribe(params => {
      if(params['id']){
        this.routeId = params['id'];
      }
    })

    if (this.routeId != 0){
      try {
        this.contracts = this.form
      } catch (e: any) {
        this.contracts = [];
        console.error(e.message);
      }
    } else {
      try {
        this.contracts = JSON.parse(localStorage.getItem('forms') || '[]');
      } catch (e: any) {
        this.contracts = [];
        console.error(e.message);
      }
    }
  }

  ngOnInit(): void {
    console.log(this.form.value);
  }

  onSubmit() {
    if (this.routeId == 0) {
      this.contractService
      .contract(3, this.form.value)
      .subscribe(() => {
        console.log(this.form.value);
      });
    } else if (this.routeId != 0 ){
        this.contractService.updateContract(this.routeId, this.form.value).subscribe(x => {
          console.log(x)
        })
      }
    this.router.navigate(['/']);
  }
}
