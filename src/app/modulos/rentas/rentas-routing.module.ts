import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarSolicitudComponent } from './asignar-solicitud/asignar-solicitud.component';

const routes: Routes = [
  //Asignar solicitud
  {
    path: 'asignar-solicitud',
    component: AsignarSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentasRoutingModule { }
