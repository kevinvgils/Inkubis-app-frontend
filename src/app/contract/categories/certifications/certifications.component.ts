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

  constructor(private route: ActivatedRoute, private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('certification') as FormGroup;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!+this.route.snapshot.paramMap.get('id')!) {
      console.log(JSON.stringify(this.form.value));
      this.router.navigate(['contract/thirdparty']);
    } else {
      this.router.navigate(['contract/',+this.route.snapshot.paramMap.get('id')!,'/thirdparty']);
    }
  }

}
