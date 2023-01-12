import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/contract/contract.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  contracts: any;
  form: FormGroup;
  
  constructor(private route: ActivatedRoute, private router: Router, readonly contractService: ContractService) {
  }

  ngOnInit(): void {
  }

}
