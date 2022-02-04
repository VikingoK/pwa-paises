import { Injectable } from '@angular/core';

/* Importacion http */
import { HttpClient , HttpParams } from '@angular/common/http';

/* Importacion observable de rxjs */
import { Observable } from 'rxjs';

/* Importacion de interfaces */
import { Pais } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  /* https://restcountries.com/v2/regionalbloc/eu */
  /* https://restcountries.com/v2/alpha/pe */


  get httpParams (){
    return new HttpParams()
    .set('filds', 'name,capital,alpha2code,flag,population')
  }

  constructor(private __http: HttpClient) { }

/*  */
  buscarPais( termino: string ): Observable<Pais[]> {
    
    const url = `${this.apiUrl}/name/${termino}`;

    return this.__http.get<Pais[]>(url, {params: this.httpParams});
  }

  /*  */
  buscarCapital( termino: string ): Observable<Pais[]>{
    
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.__http.get<Pais[]>(url, { params: this.httpParams})
  }

  /* https://restcountries.com/v2/all?fields=name,capital,alpha2code,flag,population  */
  buscarRegion( termino: string ): Observable<Pais[]>{

    
    const url = `${this.apiUrl}/regionalbloc/${termino}`

    return this.__http.get<Pais[]>(url, { params: this.httpParams})
            .pipe(
              tap(console.log)
              );
  }

  /*  */
  buscarPorCodigo(  id : string ): Observable<Pais>{

    const url = `${this.apiUrl}/alpha/${id}`

    return this.__http.get<Pais>(url);
  }

}
