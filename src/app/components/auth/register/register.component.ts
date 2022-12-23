import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IRegister, ILogin } from '../auth.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formData: IRegister;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      phoneNumber: '',
      isAdmin: false,
      role: '',
    };
  }

  onSubmit(): void {
    if (this.formData.emailAddress != '' && this.formData.password != '') {
      this.authService.register(this.formData).subscribe();
    }
  }
}
