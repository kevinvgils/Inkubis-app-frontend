import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormComponent } from './components/form/form.component';
import { VerifyComponent } from './components/verify/verify.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormComponent },
  { path: 'contract', loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule) },
  { path: 'verify', pathMatch: 'full', component: VerifyComponent },
  { path: 'pdf', pathMatch: 'full', component: PdfComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
