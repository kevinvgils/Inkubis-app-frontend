import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-data-category',
  templateUrl: './data-category.component.html',
  styleUrls: ['./data-category.component.css'],
})
export class DataCategoryComponent implements OnInit {
  form: FormGroup;
  routeId: number = 0;

  constructor(private route: ActivatedRoute, private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('category') as FormGroup;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.routeId = params['id'];
    })
  }

  onSubmit(){
    if (this.routeId != 0){
      this.router.navigate(['contract/edit/' + this.routeId + '/specialdatacategory']);
    } else {
      console.log(+this.route.snapshot.paramMap.get('id')!);
      this.router.navigate(['contract/specialdatacategory']);
    }
  }
}
