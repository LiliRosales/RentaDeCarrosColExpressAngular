import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantillas/error/error.component';
import { InicioComponent } from './plantillas/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio',
  component: InicioComponent
},
{
path: "",
pathMatch: 'full',
redirectTo: '/inicio'
},
{
  path: "**",
  component: ErrorComponent
},
{
  path:'seguridad',
  loadChildren: () =>import("./modulos/seguridad/seguridad.module").then(x =>x.SeguridadModule)
},
{
  path:'rentas',
  loadChildren: () =>import("./modulos/rentas/rentas.module").then(x =>x.RentasModule)
},
{
  path:'administracion',
  loadChildren: () =>import("./modulos/administracion/administracion.module").then(x =>x.AdministracionModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
