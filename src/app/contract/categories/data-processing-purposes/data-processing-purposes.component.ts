// Verwerkingsdoeleindes: string[] 

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-data-processing-purposes',
  templateUrl: './data-processing-purposes.component.html',
  styleUrls: ['./data-processing-purposes.component.css']
})
export class DataProcessingPurposesComponent implements OnInit {

  form: FormGroup;

  constructor(private route: ActivatedRoute, private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('contractinfo') as FormGroup;
  }

  ngOnInit(): void {
    console.log('test')
  }

  onSubmit(){
    if (+this.route.snapshot.paramMap.get('id')!){
      this.router.navigate(['contract/edit/' + +this.route.snapshot.paramMap.get('id')! + '/certification']);
    } else {
      console.log(+this.route.snapshot.paramMap.get('id')!);
      this.router.navigate(['contract/certification']);
    }
  }

}
