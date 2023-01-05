import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  selectedUser: User = new User();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.data.userId).subscribe(user => {
      console.log(user);
      this.selectedUser = user
    })
  }

}
