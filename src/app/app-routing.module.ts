import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInAuthGuard } from './auth/auth.guards';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PdfComponent } from './pdf/pdf.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'contract',
    loadChildren: () =>
      import('./contract/contract.module').then((m) => m.ContractModule),
  },
  {
    path: '',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    component: UsersComponent,
  },
  {
    path: 'pdf',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    component: PdfComponent,
  },
  {
    path: 'users',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    component: UsersComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
