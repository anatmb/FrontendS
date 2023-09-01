import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleado: Persona[] = [];
  constructor(private router:Router, private empleadoS: ServiceService) { }

  ngOnInit(): void {
    this.empleadoS.traer().subscribe(data => {this.empleado= data});
  }

  cargarcliente(): void {
    this.empleadoS.traer().subscribe((data: Persona[]) => {
      this. empleado = data;
    });
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.empleadoS.borrar(id).subscribe({
        next: () => {
          alert('se eliminó correctamente');
          this.cargarcliente();
        },
        error: (err) => {
          console.log(err);
          alert('Error, No se pude eliminar el cliente');
        }
      });
    }
  }
  informacionempleado(){
    this.router.navigate(['/informacionempleado'])
  }

  main(){
    this.router.navigate(['/main'])
  }

}
