import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona.model';
import { PersonaServiceTsService } from 'src/app/service/persona.service.ts.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  persona: Persona[] = [];
  constructor(
    private router: Router, private personaS:PersonaServiceTsService ) { }

  ngOnInit(): void {
    this.personaS.traer().subscribe(data => {this.persona= data});
  }

  cargarcliente(): void {
    this.personaS.traer().subscribe((data: Persona[]) => {
      this.persona = data;
    });
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.personaS.borrar(id).subscribe({
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
