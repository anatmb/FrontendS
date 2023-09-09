import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { PersonaServiceTsService } from 'src/app/service/persona.service.ts.service';

@Component({
  selector: 'app-nuevoempleado',
  templateUrl: './nuevoempleado.component.html',
  styleUrls: ['./nuevoempleado.component.css']
})
export class NuevoempleadoComponent implements OnInit {
  estadoEmpleado:string=" ";
  dniempleado: string=" ";
  nombreEmpleado: string=" ";
  apellidoEmpleado: string=" ";
  legajoEmpleado:string=" ";
  fechaNascimentoEmpleado: Date= new Date();
  fechaAltaEmpleado: Date=new Date();
  objetivoEmpleado: string=" ";
  turnoEmpleado: string=" ";
  telefonoEmpleado:number=0;
  cargoEmpleado:string=" ";
  emailEmpleado:string=" ";
  direccionEmpleado: string=" ";
  codigoPostalEmpleado: string=" ";
  
  
  constructor(private router:Router,
    private activatedRouter: ActivatedRoute, 
    private empleadoS: PersonaServiceTsService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const VEmpleado = new PersonaEmpleado(this.estadoEmpleado, this.dniempleado, this.nombreEmpleado,
      this.apellidoEmpleado, this.legajoEmpleado, this. fechaNascimentoEmpleado, 
      this.fechaAltaEmpleado, this.objetivoEmpleado, this. turnoEmpleado,  
      this.telefonoEmpleado, this.cargoEmpleado, this.emailEmpleado,
      this.direccionEmpleado, this.codigoPostalEmpleado);


    this.empleadoS.create(VEmpleado).subscribe((res) =>
      console.log(res)
      
    )
    alert('Cliente agregado');
    this.router.navigate(['empleado']);
  }

  main(){
    this.router.navigate(['/main'])
  }

}
