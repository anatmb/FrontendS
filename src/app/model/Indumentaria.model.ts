export class Indumentaria{
     
    idIdumentaria?: number;
    
    tipoIndumentaria:string;
    nombreIndumentaria:string;
    talleIndumentaria:string;
    fechaUltimaEntregaIdumentaria:Date;
    fechaProximaEntregaIdumentaria:Date;

    constructor(
        tipoIndumentaria:string, nombreIndumentaria:string, talleIndumentaria:string,
        fechaUltimaEntregaIdumentaria:Date,fechaProximaEntregaIdumentaria:Date )
        {
          this.tipoIndumentaria=tipoIndumentaria;
          this.nombreIndumentaria=nombreIndumentaria;
          this.talleIndumentaria= talleIndumentaria;
          this. fechaUltimaEntregaIdumentaria= fechaUltimaEntregaIdumentaria;
          this.fechaProximaEntregaIdumentaria=fechaProximaEntregaIdumentaria; 
         }


}
