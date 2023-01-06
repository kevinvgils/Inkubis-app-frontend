import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract/contract';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  contracts: Contract[] = []; //getAllContracts();

  constructor() { }

  ngOnInit(): void {
  }

  getAllContracts() {
    return ;
  }
}
