import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { ModeloSolicitud } from 'src/modelos/solicitud.modelo';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
    'fecha':['',[Validators.required]],
    'estado':['',[Validators.required]],
    'valor':['',[Validators.required]],
    'tipo':['',[Validators.required]]
  });

  constructor(private fb: FormBuilder, private serviciosolicitud:SolicitudService, private router:Router) { }

  ngOnInit(): void {
  }
  GuardarSolicitud(){
    let id=this.fgValidador.controls["id"].value;
    let fecha=this.fgValidador.controls["fecha"].value;
    let estado = parseFloat(this.fgValidador.controls["estado"].value);
    let valor = this.fgValidador.controls["valor"].value;
    let tipo = this.fgValidador.controls["tipo"].value;

    let p= new ModeloSolicitud();
    
    p.id=id;
    p.fecha=fecha;
    p.valor=valor;
    p.tipo=tipo;
   

    
    this.serviciosolicitud.CrearSolicitud(p).subscribe((datos:ModeloSolicitud)=>{
      alert("Solicitud almacenada correctamente");
      this.router.navigate(["/administracion/listar-alquiler"])
    },(error:any)=>{
      alert("Error almacenando el alquiler");
    })
  }
}


