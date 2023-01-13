import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscriber } from 'rxjs';
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

  companyForm!: FormGroup

  file!: File

  base64code!: any

  

  constructor(private companyService: CompanyService, private modalService: NgbModal) {}

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
        Validators.pattern(/[0-9]{3} [0-9]{3} [0-9]{3}/g) 
      ]),

      imageURL: new FormControl('', [
        Validators.required,
      ])
    })
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

  createCompany() {
    this.companyService.create(this.companyForm.value).subscribe((data: any) => this.getCompanies())
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
      if(result === 'create'){
        this.createCompany();
      }
    },
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  onChange($event: any) {
    const target = $event.target as HTMLInputElement
    const file: File = (target.files as FileList)[0] 
    this.convertToBase64(file)
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })

    observable.subscribe((d) => {
      this.file = d
      this.base64code = d
      this.companyForm.patchValue({imageURL: d})
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result)
      subscriber.complete();
    }

    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    }
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
