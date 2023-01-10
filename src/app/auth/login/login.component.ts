import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../auth.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData: ILogin;
  wrongPwOrEmail: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formData = {
      emailAddress: '',
      password: '',
    };
  }

  onSubmit(): void {
    if (this.formData.emailAddress != '' && this.formData.password != '') {
      this.authService
        .login(this.formData.emailAddress, this.formData.password)
        .subscribe((user: ILogin | undefined) => {
          if (user) {
            this.wrongPwOrEmail = false;
            this.router.navigate(['/']);
          } else {
            this.wrongPwOrEmail = true;
            this.formData.password = ''
          }
        });
    }
  }
}
