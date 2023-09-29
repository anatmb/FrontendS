import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment'
import { Fecha } from 'src/app/model/Fecha.model';
import { Indumentaria } from 'src/app/model/Indumentaria.model';
import { PersonaEmpleado } from 'src/app/model/PersonaEmpleado.model';
import { FechaService } from 'src/app/service/fecha.service';
import { PersonaServiceTsService } from 'src/app/service/persona.service.ts.service';
import { ServiceindumentariaService } from 'src/app/service/serviceindumentaria.service';

@Component({
  selector: 'app-informacionempleado',
  templateUrl: './informacionempleado.component.html',
  styleUrls: ['./informacionempleado.component.css']
})
export class InformacionempleadoComponent implements OnInit {
  empleado: PersonaEmpleado= new PersonaEmpleado(' ', ' ', ' ', ' ', ' ',new Date(),new Date(), ' ', ' ',0, ' ', ' ', ' ', ' ');
  indumentaria: Indumentaria= new Indumentaria(' ',' ', ' ', new Date(), new Date());
  fechahabiles: string= " ";

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];


  monthSelect: any[] = [];
  dateSelect: any;
  dateValue: any;

  constructor(private router:Router,
    private activatedRouter: ActivatedRoute, 
    private empleadoS: PersonaServiceTsService,
    private fechaS: FechaService,
    private indumentariaS:ServiceindumentariaService
    ) { }

  ngOnInit(): void {
   this.getDaysFromDate(9, 2023);
    const id = this.activatedRouter.snapshot.params['id'];
    this.empleadoS.detail(id).subscribe(
      data => {
        this. empleado = data;
        console.log("imprimir DNI "+this.empleado.dniempleado);
      }
    )

    this.indumentariaS.detail(id).subscribe(
      dataI=>{
        this. indumentaria=dataI;
      })
  }
  main(){
    this.router.navigate(['/main'])
  }

  
  getDaysFromDate(month: number,year: number) {

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.monthSelect = arrayDays;
  }

  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day: { value: any; }) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
  }

  onCreate1(): void {
    const Vfechadiahabiles = new Fecha(this.fechahabiles);

    this.fechaS.create(Vfechadiahabiles).subscribe((res) =>
      console.log(res)
      
    )
    alert('Fecha agregada');
    this.router.navigate([' ']);
  }



}
