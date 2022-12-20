import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormComponent },
  {
    path: 'contract',
    loadChildren: () =>
      import('./contract/contract.module').then((m) => m.ContractModule),
  },
  { path: 'pdf', pathMatch: 'full', component: PdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
