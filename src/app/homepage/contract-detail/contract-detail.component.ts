import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from 'src/app/contract/contract';
import { FormProvider } from 'src/app/contract/FormProvider';
import { HomepageService } from 'src/app/homepage/homepage.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  contracts: any;
  form: FormGroup;
  contractId: string | null = "";
  contract: Contract;
  
  constructor(private route: ActivatedRoute, private router: Router, readonly homepageService: HomepageService) {
  }

  ngOnInit(): void {
    const contractId = Number(this.route.snapshot.paramMap.get('id'));
    this.homepageService.getContractById(contractId);
  }
}
