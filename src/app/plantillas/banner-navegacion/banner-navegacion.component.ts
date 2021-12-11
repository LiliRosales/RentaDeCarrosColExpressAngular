import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ModeloIdentifica } from 'src/modelos/identificar.modelo';

@Component({
  selector: 'app-banner-navegacion',
  templateUrl: './banner-navegacion.component.html',
  styleUrls: ['./banner-navegacion.component.css']
})
export class BannerNavegacionComponent implements OnInit {

  SeInicioSesion:boolean = false;
  SeInicioSesionasesor:boolean = false;
  SeInicioSesionCliente:boolean=false;
  sub:Subscription=new Subscription();
  constructor(private seguridadservicio:SeguridadService) { }

  ngOnInit(): void {
    this.sub=this.seguridadservicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentifica)=>{
      if (datos.aministrador==true){
        this.SeInicioSesion=datos.estaidentificado;
      }
      if (datos.asesor==true){
        this.SeInicioSesionasesor=datos.estaidentificado;
        
      }
      if (datos.cliente==true) {
        this.SeInicioSesionCliente=datos.estaidentificado;
      }

      if (datos.aministrador==false && datos.asesor==false && datos.cliente==false){
        this.SeInicioSesion=datos.estaidentificado;
        this.SeInicioSesionasesor=datos.estaidentificado;
        this.SeInicioSesionCliente=datos.estaidentificado;
      }
    });
  }

}
