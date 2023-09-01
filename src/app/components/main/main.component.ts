import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mostrar: Boolean = false;
  mensaje: String = 'hola, me estan leyendo';
  mensaje_enlace:String = 'Mostrar';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  mostrarOcultar(){
    if(this.mostrar){
      this.mostrar = false;
      this.mensaje_enlace = 'Mostrar';
      }else{
        this.mostrar = true;
        this.mensaje_enlace = 'Ocultar';
      }
  }
  gps(){
    this.router.navigate(['/gps'])
  }

  sistema(){
    this.router.navigate(['/sistema'])
  }

  main(){
    this.router.navigate(['/main'])
  }

}
