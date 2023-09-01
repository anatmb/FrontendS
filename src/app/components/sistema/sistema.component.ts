import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  constructor(private router:Router) 
  { }

  ngOnInit(): void {
   
  }
  main(){
    this.router.navigate(['/main'])
  }

}
