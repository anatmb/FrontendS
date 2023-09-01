import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { GpsComponent } from './components/gps/gps.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { InformacionempleadoComponent } from './components/informacionempleado/informacionempleado.component';
import { SistemaComponent } from './components/sistema/sistema.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    FooterComponent,
    GpsComponent,
    EmpleadoComponent,
    InformacionempleadoComponent,
    SistemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
