import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-data-subject-category',
  templateUrl: './data-subject-category.component.html',
  styleUrls: ['./data-subject-category.component.css'],
})
export class DataSubjectCategoryComponent implements OnInit {
  
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
      this.router.navigate(['contract/edit/' + this.routeId + '/datacategory']);
    } else {
      console.log(+this.route.snapshot.paramMap.get('id')!);
      this.router.navigate(['contract/datacategory']);
    }
  }
}
