import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsService } from 'src/app/service/persona.service.ts.service';

@Component({
  selector: 'app-editempleado',
  templateUrl: './editempleado.component.html',
  styleUrls: ['./editempleado.component.css']
})
export class EditempleadoComponent implements OnInit {
  empleado: PersonaEmpleado= new PersonaEmpleado(' ', ' ', ' ', ' ', ' ',new Date(),new Date(), ' ', ' ',0, ' ', ' ', ' ', ' ');
  
  constructor(
    private router:Router,
    private activatedRouter: ActivatedRoute, 
    private empleadoS: PersonaServiceTsService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    // console.log("entro");
    this.empleadoS.detail(id).subscribe(
      data => {
        this.empleado = data;
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.empleadoS.actualizar(id, this.empleado).subscribe(
      data => {
        console.log("vamos a ver");
        // this.clientesService = data;
        alert('Cliente Modificado');
        this.router.navigate(['empleado']);
      }
    )
  }

  main(){
    this.router.navigate(['/main'])
  }
  login(){
    this.router.navigate(['/login'])
  }


}
