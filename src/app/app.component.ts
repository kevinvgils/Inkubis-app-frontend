import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ILogin, IToken } from './auth/auth.interface';
import { AuthService } from './auth/auth.service';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';
import { User } from './users/user.model';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Inkubis';
  loggedInUser$!: Observable<IToken | undefined>;
  users: User[];

  constructor(
    private readonly userService: UsersService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    this.loggedInUser$ = this.authService.currentUser$;
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

  logout(): void {
    this.authService.logout();
  }
}
