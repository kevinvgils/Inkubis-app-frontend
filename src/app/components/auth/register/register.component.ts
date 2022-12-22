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
      emailAddress: '',
      password: '',
    };
  }

  onSubmit(): void {
    console.log(
      'EmailAddress: ' +
        this.formData.emailAddress +
        ' Password: ' +
        this.formData.password
    );
    if (this.formData.emailAddress != '' && this.formData.password != '') {
      this.authService
        .login(this.formData.emailAddress, this.formData.password)
        .subscribe((user: ILogin | undefined) => {
          console.log('User: ' + user);

          if (user) {
            console.log('Logged in');
            this.router.navigate(['/']);
          } else {
            console.error('Invalid data');
          }
        });
    }
  }
}
