import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  image: File;

  base64code: any;

  constructor(private sanitizer: DomSanitizer) {}

  getFile($event: any) {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    return file;
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      this.base64code = d;
      this.image = d;
    });
  }

  convertToImage(code: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(code);
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };

    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    };
  }
}
