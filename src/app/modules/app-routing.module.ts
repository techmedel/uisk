import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaComponent } from '../main/pages/sistema/sistema.component';
import { LoginComponent } from '../main/pages/login/login.component';



const routes: Routes = [
  { path:  'administracion/sistemas', component: SistemaComponent },
  { path:  'auth/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
