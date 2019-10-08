import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module';
import { AppRoutingModule } from './modules/app-routing.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { SistemaComponent } from './main/pages/sistema/sistema.component';
import { LoginComponent } from './main/pages/login/login.component';
import { MonitoreoComponent } from './main/pages/monitoreo/monitoreo.component';
import { AeropuertoComponent } from './main/pages/aeropuerto/aeropuerto.component';
import { InicioComponent } from './main/pages/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SistemaComponent,
    LoginComponent,
    MonitoreoComponent,
    AeropuertoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
