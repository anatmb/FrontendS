
export class Persona{
    subscribe(arg0: (data: any) => void, arg1: (err: any) => void): any {
      throw new Error('Method not implemented.');
    }
    idEmpleado?: number;
    estadoEmpleado:string;
    DNIEmpleado : string;
    nombreEmpleado: string;
    apellidoEmpleado: string;
    legajoEmpleado:number;
    fechaNacimientoEmpleado: Date;
    fechaAltaEmpleado: Date;
    objetivoEmpleado: string;
    turnoEmpleado: string;
    telefonoEmpleado:number;
    cargarEmpleado:string;
    emailEmpleado:string;
    direccionEmpleado: string;
    codigoPostalEmpleado: string;
    // img:string;
   
    constructor(estadoEmpleado:string,  DNIEmpleado : string, nombreEmpleado: string, 
      apellidoEmpleado: string, legajoEmpleado:number, fechaNacimientoEmpleado: Date,
      fechaAltaEmpleado: Date, objetivoEmpleado: string, turnoEmpleado: string,
      telefonoEmpleado:number, cargarEmpleado:string,emailEmpleado:string,
      direccionEmpleado: string,codigoPostalEmpleado: string,
      // img:string
      )
    {
      this.estadoEmpleado = estadoEmpleado;
      this.DNIEmpleado = DNIEmpleado;
      this.nombreEmpleado = nombreEmpleado;

      this. apellidoEmpleado =  apellidoEmpleado;
      this. legajoEmpleado = legajoEmpleado;
      this.fechaNacimientoEmpleado =fechaNacimientoEmpleado;
      this. fechaAltaEmpleado =  fechaAltaEmpleado;

      this.objetivoEmpleado = objetivoEmpleado;
      this.turnoEmpleado = turnoEmpleado;
      this. telefonoEmpleado =  telefonoEmpleado;


      this.cargarEmpleado =cargarEmpleado;
      this.emailEmpleado = emailEmpleado;
      this.direccionEmpleado = direccionEmpleado;
      this.codigoPostalEmpleado = codigoPostalEmpleado;

        // this.img= img;
    }
  }
  