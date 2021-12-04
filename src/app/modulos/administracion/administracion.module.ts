import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { AsesorComponent } from './asesor/asesor.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';


@NgModule({
  declarations: [
    ClienteComponent,
    AsesorComponent,
    AdministradorComponent,
    VehiculoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
