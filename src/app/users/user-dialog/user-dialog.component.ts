import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from '../company.model';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
})
export class UserDialogComponent implements OnInit {
  selectedUser: User = new User();
  allCompanies: Company[] = [];
  userForm: FormGroup;
  preSelectedCompanies: number[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly userService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.userForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(''),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      role: new FormControl(),
      companies: new FormControl(),
    }) as FormGroup;

    await this.userService.getUserById(this.data.userId).subscribe((user) => {
      this.selectedUser = user;
      this.userService.getAllCompanies().subscribe((companies) => {
        this.allCompanies = companies;
        this.selectedUser.companies.forEach((company) => {
          this.preSelectedCompanies.push(company.id);
        });
      });

      this.userForm.setValue({
        firstName: this.selectedUser.firstName,
        lastName: this.selectedUser.lastName,
        emailAddress: this.selectedUser.emailAddress,
        role: this.selectedUser.role,
        companies: this.preSelectedCompanies,
      });
    });
  }

  async onSubmit() {
    if (
      this.userForm.value.firstName != '' &&
      this.userForm.value.emailAddress != ''
    ) {
      console.log(this.userForm.value);
      await this.userService
        .updateUser(this.selectedUser.id, this.userForm.value)
        .subscribe((x) => {
          console.log(x);
          this.router.navigate(['users']);
        });
    }
  }
}
