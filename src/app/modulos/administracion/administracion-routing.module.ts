import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAdministradorComponent } from './administrador/buscar-administrador/buscar-administrador.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administrador/eliminar-administrador/eliminar-administrador.component';
import { BuscarAsesorComponent } from './asesor/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [

  //Administrador
  {
    path: 'crear-administrador',
    component: CrearAdministradorComponent
  },
  {
    path: 'buscar-administrador',
    component: BuscarAdministradorComponent
  },
  {
    path: 'editar-administrador',
    component: EditarAdministradorComponent
  },
  {
    path: 'eliminar-administrador',
    component: EliminarAdministradorComponent
  },

  //Asesor
  {
    path: 'crear-asesor',
    component: CrearAsesorComponent
  },
  {
    path: 'buscar-asesor',
    component: BuscarAsesorComponent
  },
  {
    path: 'editar-asesor',
    component: EditarAsesorComponent
  },
  {
    path: 'eliminar-asesor',
    component: EliminarAsesorComponent
  },

  //Cliente
  {
    path: 'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent
  },
  {
    path: 'editar-cliente/:id',
    component: EditarClienteComponent
  },
  {
    path: "listar-clientes",
    component: BuscarClienteComponent
  },
  {
    path: 'eliminar-cliente/:id',
    component: EliminarClienteComponent
  },

  //Vehiculo
  {
    path: 'crear-vehiculo',
    component: CrearVehiculoComponent
  },
  {
    path: 'buscar-vehiculo',
    component: BuscarVehiculoComponent
  },
  {
    path: 'editar-vehiculo',
    component: EditarVehiculoComponent
  },
  {
    path: 'eliminar-vehiculo',
    component: EliminarVehiculoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
