// Verwerkingsverantwoordelijke 
  // Wettelijke (bedrijfs-) naam van verwerkingsverantwoordelijke - string 
  // Land wetgeving (Nederland of België) - boolean 
  // Ondernemingsnummer - string 
  // Adres - string 
  // Postcode - string 
  // Plaats - string 
  // Land - string 

// Verwerker 
  // Wettelijke (bedrijfs-) naam van verwerker - string 
  // Land (Nederland of België) - boolean 
  // Ondernemingsnummer - string 
  // Adres - string 
  // Postcode - string 
  // Plaats - string 
  // Land – string 

// Datum ondertekent – Date 
// Plaats ondertekent – string 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.css']
})
export class ContractInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
