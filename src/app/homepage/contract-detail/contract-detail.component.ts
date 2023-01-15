import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from 'src/app/contract/contract';
import { IContract } from 'src/app/contract/contract.interface';
import { ContractService } from 'src/app/contract/contract.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  contract!: IContract;
  
  constructor(private route: ActivatedRoute, readonly contractService: ContractService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getContractById(+this.route.snapshot.paramMap.get('id')!);
    console.log(this.contract);
  }

  getContractById(id: number) {
    this.contractService.getContractById(id).subscribe((contract: IContract) => {
      this.contract = contract;
    });
  }
}
