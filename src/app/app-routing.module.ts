import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInAuthGuard } from './components/auth/auth.guards';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormComponent } from './components/form/form.component';
import { VerifyComponent } from './components/verify/verify.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    component: FormComponent,
  },
  {
    path: 'contract',
    canActivate: [LoggedInAuthGuard],
    loadChildren: () =>
      import('./contract/contract.module').then((m) => m.ContractModule),
  },
  {
    path: 'verify',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    component: VerifyComponent,
  },
  {
    path: 'pdf',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    component: PdfComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
