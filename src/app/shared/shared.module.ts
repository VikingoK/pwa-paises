import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Importacion de componentes */
import { SidebarComponent } from './sidebar/sidebar.component';

/* Importacion de rutas */
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
