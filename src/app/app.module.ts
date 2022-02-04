import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 /* ---------------------------- */
    /* Importaciones propias */
 /* ---------------------------- */


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Importacion http */
import { HttpClientModule } from '@angular/common/http';

/* Importacion de modulos */
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaisModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
