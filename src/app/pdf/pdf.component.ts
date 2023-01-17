import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 
import { PdfService } from './pdf.service';
import { IPDF } from './pdf.interface';
import { IContract } from '../contract/contract.interface';
import { ContractService } from '../contract/contract.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  //pdfTable: ;
  @ViewChild('htmlData') htmlData!: ElementRef;
  //pdf: PdfComponent | undefined;
  contract: IContract | undefined;
  company: Object | undefined;
  companyId: number | undefined
  routeId: number = 0;

  USERS = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'sincere@april.biz',
      phone: '1-770-736-8031 x56442',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'shanna@melissa.tv',
      phone: '010-692-6593 x09125',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'nathan@yesenia.net',
      phone: '1-463-123-4447',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'julianne@kory.org',
      phone: '493-170-9623 x156',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'lucio@annie.ca',
      phone: '(254)954-1289',
    },
    {
      id: 6,
      name: 'Mrs. Dennis',
      email: 'karley@jasper.info',
      phone: '1-477-935-8478 x6430',
    },
  ];

  constructor(private pdfService: PdfService, private contractService : ContractService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.routeId = params['id'];
      }
    })
    this.contractService.getContractById(this.routeId)
    .subscribe((contract: IContract) => {
      console.log(contract);
    
      //pdf.company = Object.values(pdf.company).at(1);
      //this.staticUser = {
      //  ...JSON.parse(JSON.stringify(user)),
      //};
      this.contract = {
        ...JSON.parse(JSON.stringify(contract)),
      };
    });




  }



  public openPDF(): void {
  let data:any;
if(this.contract?.companyResponsibleForDP.legalCountry == true) {
  data = document.getElementById('htmlDataNL');
} else {
  data = document.getElementById('htmlDataBE');
}
    
html2canvas(data).then((canvas:any) => {
  const imgWidth = 208;
  const pageHeight = 295;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;
  heightLeft -= pageHeight;
  const doc = new jspdf.jsPDF('p', 'mm');
  doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    doc.addPage();
    doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
    heightLeft -= pageHeight;
  }
  doc.save('Downld.pdf');
});
    
    /*let DATA: any = document.getElementById('htmlDataBE');
    let pdf = new jspdf.jsPDF('p', 'pt', [ 595.28,  841.89]);
    pdf.
    pdf.html(DATA).then(() => pdf.save('test.pdf'));*/
    

    
    /*html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      
      let position = 0;
      //PDF.setFont("helvetica");
      PDF.html("hello", document.getElementById('htmlData')).save('angular-demo.pdf');
      PDF.setFontSize(30);
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });*/
  }
    

  


}

