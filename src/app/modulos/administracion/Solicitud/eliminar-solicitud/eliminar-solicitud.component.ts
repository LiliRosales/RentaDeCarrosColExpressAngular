import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
@Component({
  selector: 'app-eliminar-solicitud',
  templateUrl: './eliminar-solicitud.component.html',
  styleUrls: ['./eliminar-solicitud.component.css']
})
export class EliminarSolicitudComponent implements OnInit {


  id:string='';
  constructor(private servicioSolicitud: SolicitudService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.EliminarSolicitud();
    this.router.navigate(["/administracion/listar-solicitud"])
  }
  EliminarSolicitud(){
    this.servicioSolicitud.EliminarSolicitud(this.id).subscribe((id:string)=>{
      
      alert("Solicitud eliminado correctamente");
    },(error:any)=>{
      
      alert("Error eliminando la solicitud");
    })

  }

}


