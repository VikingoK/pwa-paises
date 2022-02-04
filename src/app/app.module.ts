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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaisModule,
    SharedModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
