import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Contract } from '../contract/contract';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  contracts: any[];
  
  constructor(private readonly homepageService: HomepageService, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.getContracts();
  }

  async getContracts(): Promise<void>{
    this.homepageService.getAllContracts().subscribe(contracts => {
      this.contracts = contracts
      console.log(contracts)
    })
  }

  async deleteContract(contractId: number): Promise<void>{
    this.homepageService.deleteContract(contractId).subscribe(() => {
      console.log("Contract with id", contractId, " deleted")
    })
    await this.getContracts();
  }
}
