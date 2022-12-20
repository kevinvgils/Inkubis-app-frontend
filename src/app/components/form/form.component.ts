import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  contracts: any;
  constructor() {
    try {
      this.contracts = JSON.parse(localStorage.getItem('forms') || '[]');
    } catch (e:any) {
      this.contracts = [];
      console.error(e.message);
    };

    console.log(this.contracts);
  }

  ngOnInit(): void {}

  clearLocalStorage(){
    localStorage.clear();
    window.location.reload();
  }
}
