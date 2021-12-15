import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { ModeloSolicitud } from 'src/modelos/solicitud.modelo';

@Component({
  selector: 'app-buscar-solicitud',
  templateUrl: './buscar-solicitud.component.html',
  styleUrls: ['./buscar-solicitud.component.css']
})
export class BuscarSolicitudComponent implements OnInit {
  
  listasolicitud:ModeloSolicitud[]=[];
  constructor(private solicitudServicio:SolicitudService) { }


  ngOnInit(): void {
    this.ObtenerListaSolicitud();
  }
  ObtenerListaSolicitud(){
    this.solicitudServicio.ObtenerRegistros().subscribe((datos:ModeloSolicitud[])=>{
      this.listasolicitud=datos;

})
  }
}
