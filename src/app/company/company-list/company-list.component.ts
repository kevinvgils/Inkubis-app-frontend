import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  
  companies: Company[]

  closeResult = ''

  constructor(private companyService: CompanyService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getAll().subscribe((data: any) => {
      console.log(data);
      this.companies = data.companies;
    })
  }

  deleteCompany(id: number){
    this.companyService.delete(id).subscribe(data => this.getCompanies())
  }

  updateCompany(id: number, company: Company) {

  }

  open(content: any, companyId: number){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',}).result.then((result) => {
      this.closeResult = `Closed result with ${result}`
      if(result === 'update'){
        this.updateCompany(companyId, new Company());
      }
    },
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
