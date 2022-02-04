import { Component, OnInit } from '@angular/core';


/* Importacion de routerS */
import { ActivatedRoute } from '@angular/router';

/* Importacion de operadores de rxjs  */
import { switchMap, tap } from 'rxjs/operators';  /* switchMap recibe un observable y devulve otro */
                                                  /* Tap es un operador que lanza un efecto secundario */

/* Importacion de servicios */
import { PaisService } from '../../services/pais.service';

/* Importacion de interfaces */
import { Pais } from './../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais !: Pais;

  constructor(private activatedRoute: ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {
  

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.buscarPorCodigo( id )),
      tap( console.log )
    )
    .subscribe(paisData => this.pais = paisData)

/*     this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.paisService.buscarPorCodigo(id).subscribe( pais => {
        console.log(pais)
      })
    }) */

  }

}
