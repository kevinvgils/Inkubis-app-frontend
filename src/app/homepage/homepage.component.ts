import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Contract } from '../contract/contract';
import { IContract } from '../contract/contract.interface';
import { ContractService } from '../contract/contract.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  contracts: IContract[];
  
  constructor(private readonly contractService: ContractService, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.getContracts();
  }

  async getContracts(): Promise<void>{
    this.contractService.getAllContracts().subscribe(contracts => {
      this.contracts = contracts
      console.log(contracts)
    })
  }

  async deleteContract(contractId: number): Promise<void>{
    this.contractService.deleteContract(contractId).subscribe(() => {
      console.log("Contract with id", contractId, " deleted")
    })
    await this.getContracts();
  }
}
