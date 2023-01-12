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
  contract!: Contract;
  
  constructor(private route: ActivatedRoute, readonly homepageService: HomepageService) {
  }

  ngOnInit(): void {
    this.getContractById(+this.route.snapshot.paramMap.get('id')!);
    console.log("Opgehaald ID", + +this.route.snapshot.paramMap.get('id')!);
  }

  getContractById(id: number) {
    this.homepageService.getContractById(id).subscribe((contract: Contract) => {
      console.log("Opgehaalde contractinfo: ", + contract);
      this.contract = contract;
    });
  }
}
