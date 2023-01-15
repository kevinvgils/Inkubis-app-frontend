import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { ActivatedRoute, Router} from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  company!: Company
  companyForm!: FormGroup
  closeResult= ''

  constructor(private companyService: CompanyService, private imageService: ImageService, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCompany(+this.route.snapshot.paramMap.get('id')!);

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
        Validators.pattern('[0-9 ]{3} [0-9 ]{3} [0-9]{3}') 
      ]),

      imageBase64Code: new FormControl('', [
        Validators.required,
      ])
    })
  }

  getCompany(id: number){
    this.companyService.getById(id).subscribe((data: any) => { 
      this.company = data.company;
      this.company.image = this.imageService.convertToImage(this.company.imageBase64Code);
    });
  }

  updateCompany(company: any){
    this.companyService.update(this.company.id, company).subscribe((data: any) => {
      this.getCompany(+this.route.snapshot.paramMap.get('id')!)
    });
  }

  onSubmit(){
    const {value, valid} = this.companyForm;

    if(valid){
      this.company = value;
      this.company.imageBase64Code = this.imageService.base64code;
      this.updateCompany(this.company);
    }
  }

  open(content: any){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',}).result.then((result) => {
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

  get imageBase64Code() {
    return this.companyForm.get('imageBase64Code')
  }

}
