import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentasRoutingModule } from './rentas-routing.module';
import { RealizarSolicitudComponent } from './realizar-solicitud/realizar-solicitud.component';


@NgModule({
  declarations: [
    RealizarSolicitudComponent
  ],
  imports: [
    CommonModule,
    RentasRoutingModule
  ]
})
export class RentasModule { }
