import { Component, Input, OnInit } from '@angular/core';

/* Importacion de interfaces */
import { Pais } from '../../interfaces/pais.interface';

/* Importacion de services */
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  paisesSugeridos: Pais[] = [];

  mostrarSugerencias: boolean = false;

  placeholder : string = 'pais';


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false
    
    this.paisService.buscarPais(termino).subscribe( paisesData => {
      console.log(paisesData);

      this.paises = paisesData;

      /* paises. */
    }, (error) => {
      this.hayError = true; 
      this.paises = [];
    })
  }


  sugerencias( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino)
    .subscribe( paisesData =>{
      /* console.log(paisesData); */
      this.paisesSugeridos = paisesData.splice(0,5)
    },(error)=>{
      this.paisesSugeridos = []
    } )
  }


  buscarSugerencias( termino: string ){
    this.buscar(termino);
    
  }


}

