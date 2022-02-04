import { Component, OnInit } from '@angular/core';


/* Importacion de interfaces */
import { Pais } from '../../interfaces/pais.interface';

/* Importacion de services */
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  placeholder : string = 'capital';

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }


  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino).subscribe( capitalDatos =>{
      console.log( capitalDatos)
      this.paises = capitalDatos
    }, (error =>{
      this.hayError = true;
      this.paises = [];
    })
    );
  }


  sugerencias( termino: string ){
    
  }

}
