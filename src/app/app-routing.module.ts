import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { GpsComponent } from './components/gps/gps.component';
import { HomeComponent } from './components/home/home.component';
import { InformacionempleadoComponent } from './components/informacionempleado/informacionempleado.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SistemaComponent } from './components/sistema/sistema.component';

const routes: Routes = [
 {path:'', component: HomeComponent},
 {path:'login', component: LoginComponent},
 {path:'main', component:MainComponent},
 {path:'gps', component:GpsComponent},
 {path:'empleado', component:EmpleadoComponent},
 {path:'informacionempleado', component:InformacionempleadoComponent},
 {path:'sistema', component:SistemaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
