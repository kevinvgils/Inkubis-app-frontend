import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { ActivatedRoute, Router} from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common'
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  company!: Company
  companies: Company[]
  closeResult= ''
  companyForm!: FormGroup

  file!: File

  base64code: any;


  constructor(private companyService: CompanyService, private route: ActivatedRoute, private modalService: NgbModal, private router: Router, private location: Location) { }

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
        Validators.pattern(/[0-9]{3} [0-9]{3} [0-9]{3}/g) 
      ]),

      imageUrl: new FormControl('', [
        Validators.required,
        Validators.maxLength(200)
      ])
    })
  }

  getCompany(id: number){
    this.companyService.getById(id).subscribe((data: any) => { 
      this.company = data.company;
    });
  }

  updateCompany(){
    this.companyService.update(this.company.id, this.companyForm.value).subscribe((data: any) => {
      this.getCompany(+this.route.snapshot.paramMap.get('id')!)
    });
  }

  open(content: any){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',}).result.then((result) => {
      this.closeResult = `Closed result with ${result}`
      if(result == 'update'){
        this.updateCompany();
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
