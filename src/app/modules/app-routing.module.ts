import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaComponent } from '../main/pages/sistema/sistema.component';
import { LoginComponent } from '../main/pages/login/login.component';
import { MonitoreoComponent } from '../main/pages/monitoreo/monitoreo.component';
import { InicioComponent } from '../main/pages/inicio/inicio.component';
import { AeropuertoComponent } from '../main/pages/aeropuerto/aeropuerto.component';
import { ConsultaComponent } from '../main/pages/consulta/consulta.component';
import { MdetallesComponent } from '../main/pages/monitoreo/mdetalles/mdetalles.component';



const routes: Routes = [
  { path: 'admin_setings', component: SistemaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'monitoreo', component: MonitoreoComponent },
  { path: 'monitoreo/:HostIDUiid', component: MdetallesComponent },
  { path: 'aeropuerto', component: AeropuertoComponent },
  { path: 'consulta', component: ConsultaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
