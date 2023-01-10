import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister, ILogin } from '../auth.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: [null, [Validators.required, Validators.minLength(3)]],
        lastName: [''],
        password: [
          null,
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
        emailAddress: [null, [Validators.required, Validators.email]],
        phoneNumber: [null, [Validators.pattern('[- +()0-9]+')]],
        isAdmin: [false],
      },
      {
        validator: this.checkIfMatchingPasswords('password', 'confirmPassword'),
      }
    ) as FormGroup;
  }

  onSubmit(): void {
    if (
      this.registerForm.value.emailAddress != '' &&
      this.registerForm.value.password != ''
    ) {
      this.authService.register(this.registerForm.value).subscribe();
      this.router.navigate(['/']);
    }
  }

  checkIfMatchingPasswords(
    passwordKey: string,
    passwordConfirmationKey: string
  ) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }
}
