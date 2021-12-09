import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionAsesorComponent } from './identificacion-asesor/identificacion-asesor.component';
import { IdentificacionClienteComponent } from './identificacion-cliente/identificacion-cliente.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
  {
    path: "identificar",
    component: IdentificacionComponent
  },
  {
    path: "cambio-clave",
    component: CambioClaveComponent
  },
  {
    path: "cerrar-sesion",
    component: CerrarSesionComponent
  },
  {
    path: "identificar-asesor",
    component: IdentificacionAsesorComponent
  },
  {
    path: "identificar-cliente",
    component: IdentificacionClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
