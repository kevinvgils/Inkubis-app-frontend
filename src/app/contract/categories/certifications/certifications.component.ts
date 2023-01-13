// Certificeringen: string[] 
// Behaalde certificering: string 
// Audits, inspecties of interne controles: string[] 

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IContract } from '../../contract.interface';
import { ContractService } from '../../contract.service';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  form: FormGroup;
  routeId: number = 0;

  constructor(private route: ActivatedRoute, private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('certifications') as FormGroup;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.routeId = params['id'];
      console.log(this.form.value)
    })
  }

  onSubmit(){
    if (+this.route.snapshot.paramMap.get('id')!){
      this.router.navigate(['contract/edit/' + +this.route.snapshot.paramMap.get('id')! + '/thirdparty']);
    } else {
      console.log(+this.route.snapshot.paramMap.get('id')!);
      this.router.navigate(['contract/thirdparty']);
    }
  }

}
