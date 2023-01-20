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
  token: string;
  users: User[];

  constructor(
    private readonly userService: UsersService,
    public authService: AuthService,
    public dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    this.loggedInUser$ = this.authService.currentUser$;
    this.loggedInUser$.subscribe(u => {
      this.token = u!.token
    })
  }

  openDialog(userId: number) {
    let dialogref = this.dialog.open(UserDialogComponent, {
      width: '50vw',
      data: {
        userId: userId,
        owner: true
      },
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
