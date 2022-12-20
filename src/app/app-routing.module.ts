import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormComponent },
  {
    path: 'contract',
    loadChildren: () =>
      import('./contract/contract.module').then((m) => m.ContractModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
