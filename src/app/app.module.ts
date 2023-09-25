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
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InformacionempleadoComponent } from './components/informacionempleado/informacionempleado.component';
import { EditempleadoComponent } from './components/editempleado/editempleado.component';
<<<<<<< HEAD
import { NuevoempleadoComponent } from './components/nuevoempleado/nuevoempleado.component'
=======
import { NuevoempleadoComponent } from './components/nuevoempleado/nuevoempleado.component';
>>>>>>> 43d3ad5a9369461776d7b0efa3dc72926aaf7d06

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
    EditempleadoComponent,
<<<<<<< HEAD
    NuevoempleadoComponent,
=======
    NuevoempleadoComponent
>>>>>>> 43d3ad5a9369461776d7b0efa3dc72926aaf7d06

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }