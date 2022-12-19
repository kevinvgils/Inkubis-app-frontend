import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 
import { PdfService } from './pdf.service';
import { IPDF } from './pdf.interface';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  //pdfTable: ;
  @ViewChild('htmlData') htmlData!: ElementRef;
  //pdf: PdfComponent | undefined;
  pdf: IPDF | undefined;
  company: Object | undefined;
  companyId: number | undefined

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

  constructor(private pdfService: PdfService) {}

  ngOnInit(): void {
    
    this.pdfService
    .getContractByIdAsObservable("1")
    .subscribe((pdf: IPDF) => {
      console.log(pdf);
      pdf.company = Object.values(pdf.company).at(1);
      //this.staticUser = {
      //  ...JSON.parse(JSON.stringify(user)),
      //};
      this.pdf = {
        ...JSON.parse(JSON.stringify(pdf)),
      };
    });




  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jspdf.jsPDF();
      let position = 0;
      //PDF.setFont("helvetica");
      
      PDF.setFontSize(30);
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
    

  


}

