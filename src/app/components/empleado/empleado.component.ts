import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsService } from 'src/app/service/persona.service.ts.service';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleado: PersonaEmpleado[] = [];
  
  constructor(private router:Router, private empleadoS: PersonaServiceTsService) { }

  ngOnInit(): void {
    this.empleadoS.traer().subscribe(data => {this.empleado= data});
  }

  cargarcliente(): void {
    this.empleadoS.traer().subscribe((data: PersonaEmpleado[]) => {
      this. empleado = data;
    });
  }

  borrar(id?: number) {
    console.log("a ver que recibe" +id);
    if (id != undefined) {
      console.log("entro");
      this.empleadoS.borrar(id).subscribe({
        next: () => {
          alert('se eliminó correctamente');
          this.cargarcliente();
        },
        error: (err) => {
          console.log(err);
          alert('Error, No se pude eliminar el empleado 1');
        }
      });
    }
    else{
      alert('Error, algo pasa con el id');
    }
  }


  informacionempleado(){
    this.router.navigate(['/informacionempleado'])
  }

  main(){
    this.router.navigate(['/main'])
  }

}