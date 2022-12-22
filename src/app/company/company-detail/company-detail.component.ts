import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company!: Company
  constructor(companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
