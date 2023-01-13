import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contract } from 'src/app/contract/contract';
import { IContract } from 'src/app/contract/contract.interface';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {
  contract!: IContract;

  constructor(private route: ActivatedRoute, readonly homepageService: HomepageService) { }

  ngOnInit(): void {
    this.getContractById(+this.route.snapshot.paramMap.get('id')!);
    console.log("Opgehaald ID", + +this.route.snapshot.paramMap.get('id')!);
  }

  getContractById(id: number) {
    this.homepageService.getContractById(id).subscribe((contract: IContract) => {
      console.log("Opgehaalde contractinfo: ", + contract);
      this.contract = contract;
    });
  }

}
