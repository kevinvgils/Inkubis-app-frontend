import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { ImageService } from 'src/app/shared/services/image.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  
  companies: Company[]
  companyForm!: FormGroup
  company: Company
  closeResult = ''

  constructor(private companyService: CompanyService, private imageService: ImageService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getCompanies();

    this.companyForm = new FormGroup({
      name: new FormControl('', [
        Validators.required, 
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      country: new FormControl('', [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      zipcode: new FormControl('', [
        Validators.required, 
        Validators.minLength(5),
        Validators.maxLength(7),
        Validators.pattern(/^\d{4} ?[a-z]{2}$/i)
      ]),
      address: new FormControl('', [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      city: new FormControl('', [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(25)
      ]),
      kvkNumber: new FormControl('', [
        Validators.required, 
        Validators.minLength(4),
        Validators.maxLength(11),
        Validators.pattern('[0-9]{3} [0-9]{3} [0-9]{3}') 
      ]),

      imageURL: new FormControl('', [
        Validators.required,
      ])
    })
  }

  getCompanies() {
    this.companyService.getAll().subscribe((data: any) => {
      this.companies = data.companies;
      // Assign image
      this.companies.forEach(item => {
        item.image = this.imageService.convertToImage(item.imageBase64Code);
        console.log(item.image)
      })
    })
  }
  

  deleteCompany(id: number){
    this.companyService.delete(id).subscribe(data => this.getCompanies())
  }

  createCompany(company: Company) {
      this.companyService.create(this.company).subscribe((data: any) => this.getCompanies())
  }

  onSubmit(){
    const {value, valid} = this.companyForm;

    if(valid && !(this.imageService.base64code === "")){
      this.company = value;
      this.company.imageBase64Code = this.imageService.base64code;
      this.createCompany(this.company);
    }
  }

  openDelete(content: any, companyId: number){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',}).result.then((result) => {
      this.closeResult = `Closed result with ${result}`
      if(result === 'delete'){
        this.deleteCompany(companyId);
      }
    },
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  openCreate(content: any){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title-create',}).result.then((result) => {
      this.closeResult = `Closed result with ${result}`
    },
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  onChange($event: any) {
    const file = this.imageService.getFile($event);
    this.imageService.convertToBase64(file);
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

  get name() {
    return this.companyForm.get('name')
  }

  get country() {
    return this.companyForm.get('country')
  }

  get zipcode() {
    return this.companyForm.get('zipcode')
  }

  get address() {
    return this.companyForm.get('address')
  }

  get city() {
    return this.companyForm.get('city')
  }

  get kvkNumber() {
    return this.companyForm.get('kvkNumber')
  }

  get imageURL() {
    return this.companyForm.get('imageURL')
  }
}
