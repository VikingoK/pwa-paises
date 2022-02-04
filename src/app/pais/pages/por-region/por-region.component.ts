import { Component, OnInit } from '@angular/core';

/* Importacion de interfaces */
import { Pais } from '../../interfaces/pais.interface';

/* Importacion de servicios */
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  
  regiones: string[] = [
    'eu',
    'efta',
    'caricom',
    'pa',
    'au',
    'usan',
    'eeu',
    'al',
    'asean',
    'cais',
    'cefta',
    'nafta',
    'saarc',
  ];
  
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  placeholder: string = 'region';
  regionActiva: string = '';
  
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}


  activarRegion(region: string) {

    if (region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region).subscribe(paisData => {
      console.log(paisData) 
      this.paises = paisData
    })
  }

  getClaseCss(region:string):string {

    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';

  }

  sugerencias(termino: string) {}
}
