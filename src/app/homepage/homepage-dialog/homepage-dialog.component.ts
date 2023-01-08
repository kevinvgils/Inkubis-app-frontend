import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Contract } from 'src/app/contract/contract';
import { ContractService } from 'src/app/contract/contract.service';

@Component({
  selector: 'app-homepage-dialog',
  templateUrl: './homepage-dialog.component.html',
  styleUrls: ['./homepage-dialog.component.css']
})
export class HomepageDialogComponent implements OnInit {
  // selectedContract: Contract = new Contract();
  contractForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly contractService: ContractService, private fb: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    this.contractForm = this.fb.group({
      
    })
  }

}
