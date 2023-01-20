import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private readonly userService: UsersService,
    public dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getUsers();
  }

  async getUsers(): Promise<void> {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }

  openDialog(userId: number) {
    let dialogref = this.dialog.open(UserDialogComponent, {
      width: '50vw',
      data: {
        userId: userId,
      },
    });

    dialogref.afterClosed().subscribe((x) => {
      this.getUsers();
    });
  }
}
