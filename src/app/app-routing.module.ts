import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: ''},
  {
    path: '', loadChildren: () => import('./account/account.module').then(m=>m.AccountModule),
  },
  {
    path: 'faculty', loadChildren: () => import('./core/core.module').then(m=>m.CoreModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
