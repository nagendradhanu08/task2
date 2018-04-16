import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'roles', loadChildren: 'app/roles/roles.module#RolesModule', data: { breadcrumb: "roles" }},
  { path: 'claims', loadChildren: 'app/claims/claims.module#ClaimsModule', data: { breadcrumb: "claims" }},
  { path: '', pathMatch: 'full', redirectTo: 'roles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
