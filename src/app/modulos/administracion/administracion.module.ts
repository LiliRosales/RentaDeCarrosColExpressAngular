import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
//import { ClienteComponent } from './cliente/cliente.component';
//import { AsesorComponent } from './asesor/asesor.component';
//import { AdministradorComponent } from './administrador/administrador.component';
//import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { BuscarAdministradorComponent } from './administrador/buscar-administrador/buscar-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administrador/eliminar-administrador/eliminar-administrador.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { BuscarAsesorComponent } from './asesor/buscar-asesor/buscar-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';
import { CrearSolicitudComponent } from './Solicitud/crear-solicitud/crear-solicitud.component';
import { BuscarSolicitudComponent } from './Solicitud/buscar-solicitud/buscar-solicitud.component';
import { EditarSolicitudComponent } from './Solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './Solicitud/eliminar-solicitud/eliminar-solicitud.component';


@NgModule({
  declarations: [
    //ClienteComponent,
    //AsesorComponent,
    //AdministradorComponent,
    //VehiculoComponent,
    CrearAdministradorComponent,
    BuscarAdministradorComponent,
    EditarAdministradorComponent,
    EliminarAdministradorComponent,
    CrearAsesorComponent,
    BuscarAsesorComponent,
    EditarAsesorComponent,
    EliminarAsesorComponent,
    CrearClienteComponent,
    BuscarClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    CrearVehiculoComponent,
    BuscarVehiculoComponent,
    EditarVehiculoComponent,
    EliminarVehiculoComponent,
    CrearSolicitudComponent,
    BuscarSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
