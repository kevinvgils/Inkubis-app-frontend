import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Contract } from '../contract/contract';
import { HomepageDialogComponent } from './homepage-dialog/homepage-dialog.component';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  contracts: Contract[];
  
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

  openDialog(contractId: number) {
    let dialogref = this.dialog.open(HomepageDialogComponent, {
      width: '200vw',
      data: {
        contractId: contractId
      }
    })

    dialogref.afterClosed().subscribe(x => {
      this.getContracts()
    })
  }
}
