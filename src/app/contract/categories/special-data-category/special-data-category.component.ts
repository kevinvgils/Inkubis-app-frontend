import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-special-data-category',
  templateUrl: './special-data-category.component.html',
  styleUrls: ['./special-data-category.component.css'],
})
export class SpecialDataCategoryComponent implements OnInit {
  form: FormGroup;
  routeId: number = 0;

  constructor(private route: ActivatedRoute, private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('category') as FormGroup;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.routeId = params['id'];
      }
    })
  }

  onSubmit(){
    if (this.routeId != 0){
      this.router.navigate(['contract/edit/' + this.routeId + '/spoc']);
    } else {
      console.log(+this.route.snapshot.paramMap.get('id')!);
      this.router.navigate(['contract/spoc']);
    }
  }
}
