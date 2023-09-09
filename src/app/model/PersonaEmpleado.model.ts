export class PersonaEmpleado{
    idEmpleado?: number;
    estadoEmpleado:string;
    dniempleado: string;
    nombreEmpleado: string;
    apellidoEmpleado: string;
    legajoEmpleado:string;
    fechaNascimentoEmpleado: Date;
    fechaAltaEmpleado: Date;
    objetivoEmpleado: string;
    turnoEmpleado: string;
    telefonoEmpleado:number;
    cargoEmpleado:string;
    emailEmpleado:string;
    direccionEmpleado: string;
    codigoPostalEmpleado: string;
    // img:string;
   
    constructor(estadoEmpleado:string,  dniempleado: string, nombreEmpleado: string, 
      apellidoEmpleado: string, legajoEmpleado:string, fechaNascimentoEmpleado: Date,
      fechaAltaEmpleado: Date, objetivoEmpleado: string, turnoEmpleado: string,
      telefonoEmpleado:number, cargoEmpleado:string,emailEmpleado:string,
      direccionEmpleado: string,codigoPostalEmpleado: string,
      // img:string
      )
    {
      this.estadoEmpleado = estadoEmpleado;
      this.dniempleado = dniempleado;
      this.nombreEmpleado = nombreEmpleado;

      this. apellidoEmpleado =  apellidoEmpleado;
      this. legajoEmpleado = legajoEmpleado;
      this.fechaNascimentoEmpleado =fechaNascimentoEmpleado;
      this. fechaAltaEmpleado =  fechaAltaEmpleado;

      this.objetivoEmpleado = objetivoEmpleado;
      this.turnoEmpleado = turnoEmpleado;
      this. telefonoEmpleado =  telefonoEmpleado;


      this.cargoEmpleado =cargoEmpleado;
      this.emailEmpleado = emailEmpleado;
      this.direccionEmpleado = direccionEmpleado;
      this.codigoPostalEmpleado = codigoPostalEmpleado;

        // this.img= img;
    }
}