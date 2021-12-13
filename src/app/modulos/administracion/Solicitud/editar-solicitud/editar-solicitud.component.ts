import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { ModeloSolicitud } from 'src/modelos/solicitud.modelo';
@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {

 
  id: String ='';

  fgValidador: FormGroup= this.fb.group({
    'id':['',[Validators.required]],
    'fecha':['',[Validators.required]],
    'estado':['',[Validators.required]],
    'valor':['',[Validators.required]],
    'tipo':['',[Validators.required]]

  })
  constructor(private fb: FormBuilder, 
    private servicioSolicitud: SolicitudService,
    private router: Router,
    private route: ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarSolicitud();
  }

  BuscarSolicitud(){
    this.servicioSolicitud.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloSolicitud) =>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["fecha"].setValue(datos.tipo);
      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["valor"].setValue(datos.valor);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);

    });
  }

  EditarSolicitud(){

    let id = this.fgValidador.controls["id"].value;
    let fecha = this.fgValidador.controls["fecha"].value;    
    let estado = parseFloat(this.fgValidador.controls["estado"].value);
    let valor = this.fgValidador.controls["valor"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
   

    let p = new ModeloSolicitud();

    p.id = this.id;
    p.fecha = fecha;
    p.estado = estado;
    p.valor = valor;
    p.tipo = tipo;
    



    this.servicioSolicitud.ActualizarSolicitud(p).subscribe((datos:ModeloSolicitud) =>{
      alert("Solicitud Actualizada Correctamente");
      this.router.navigate(["/administracion/buscar-solicitud"]);
    },(error: any) =>{
      alert("Error Actualizando la solicitud");
    })

  }
}


