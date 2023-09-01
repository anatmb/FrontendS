import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { GpsComponent } from './components/gps/gps.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
 {path:'', component: HomeComponent},
 {path:'login', component: LoginComponent},
 {path:'main', component:MainComponent},
 {path:'gps', component:GpsComponent},
 {path:'empleado', component:EmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
