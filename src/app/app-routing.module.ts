import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormComponent } from './components/form/form.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormComponent },
  { path: 'verify', pathMatch: 'full', component: VerifyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
