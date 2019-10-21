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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { ChartsModule } from 'ng2-charts';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ConsultaComponent } from './main/pages/consulta/consulta.component';
import { MdetallesComponent } from './main/pages/monitoreo/mdetalles/mdetalles.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SistemaComponent,
    LoginComponent,
    MonitoreoComponent,
    AeropuertoComponent,
    InicioComponent,
    ConsultaComponent,
    MdetallesComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ChartsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
