export class Persona{
    subscribe(arg0: (data: any) => void, arg1: (err: any) => void): any {
      throw new Error('Method not implemented.');
    }
    id?: number;
    img:string;
    legajo:number;
    nombreyapellido: string;
    estado:string;
   
   
    constructor(img:string,legajo:number, nombreyapellido:string, estado:string)
    {
        this.img= img;
        this.legajo = legajo;
        this.nombreyapellido = nombreyapellido;
        this.estado = estado;
    }
  }
  