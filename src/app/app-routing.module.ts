import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormComponent },
  { path: 'verify', pathMatch: 'full', component: VerifyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
