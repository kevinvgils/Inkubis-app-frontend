import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract/contract';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  contracts: Contract[] = []; //getAllContracts();
  
  constructor() { }

  ngOnInit(): void {
  }

}
