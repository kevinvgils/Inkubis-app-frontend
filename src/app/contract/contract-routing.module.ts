import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContractComponent } from './contract.component';
import { FirstPartComponent } from './first-part/first-part.component';
import { SecondPartComponent } from './second-part/second-part.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path: '',
    component: ContractComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'firstpart' },
      { path: 'firstpart', component: FirstPartComponent },
      { path: 'secondpart', component: SecondPartComponent },
      { path: 'verify', component: VerifyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractRoutingModule {}
