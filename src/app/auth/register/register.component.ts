import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../users/users.service';
import { Company } from '../../users/company.model';
import { AuthService } from '../auth.service';
import { User } from '../../users/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  hide: boolean = true;
  selectedUser: User = new User();
  allCompanies: Company[] = [];
  preSelectedCompanies: number[] = [];

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private readonly userService: UsersService
  ) {}

  async ngOnInit(): Promise<void> {
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
        companies: [],
        emailAddress: [null, [Validators.required, Validators.email]],
        phoneNumber: [null, [Validators.pattern('[- +()0-9]+')]],
        isAdmin: [false],
      },
      {
        validator: this.checkIfMatchingPasswords('password', 'confirmPassword'),
      }
    ) as FormGroup;

    await this.userService.getAllCompanies().subscribe((companies) => {
      this.allCompanies = companies;
      this.selectedUser.companies.forEach((company) => {
        this.preSelectedCompanies.push(company.id);
      });
    });
  }

  onSubmit(): void {
    if (
      this.registerForm.value.emailAddress != '' &&
      this.registerForm.value.password != ''
    ) {
      this.authService.register(this.registerForm.value).subscribe((x) => {
        console.log(x);
      });
      this.router.navigate(['users']);
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
