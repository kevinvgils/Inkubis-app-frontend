import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ILogin } from '../auth.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  subs!: Subscription;
  loginForm!: FormGroup;
  hide: boolean = true;
  wrongPwOrEmail: boolean = false;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subs = this.authService
      .getUserFromLocalStorage()
      .subscribe((user: ILogin | undefined) => {
        if (user) {
          console.log('Gebruiker is al ingelogd');
          this.router.navigate(['/']);
        }
      });

    this.loginForm = this.fb.group({
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
    }) as FormGroup;
  }

  onSubmit(): void {
    if (
      this.loginForm.value.emailAddress != '' &&
      this.loginForm.value.password != ''
    ) {
      this.authService
        .login(this.loginForm.value.emailAddress, this.loginForm.value.password)
        .subscribe((user: ILogin | undefined) => {
          if (user) {
            this.wrongPwOrEmail = false;
            this.router.navigate(['/']);
          } else {
            this.wrongPwOrEmail = true;
            this.loginForm.value.password = '';
          }
        });
    }
  }
}
