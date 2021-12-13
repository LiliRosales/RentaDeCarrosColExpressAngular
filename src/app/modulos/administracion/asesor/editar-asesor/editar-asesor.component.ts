import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { ModeloAsesor } from 'src/modelos/asesor.modelo';

@Component({
  selector: 'app-editar-asesor',
  templateUrl: './editar-asesor.component.html',
  styleUrls: ['./editar-asesor.component.css']
})
export class EditarAsesorComponent implements OnInit {
  id:string='';
  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'email':['',[Validators.required, Validators.email]],
    'telefono':['',[Validators.required]],
    'estado':['',[Validators.required]]
  })
  constructor(private fb: FormBuilder, private servicioasesor:AsesorService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarAsesor();
  }
  BuscarAsesor(){
    this.servicioasesor.ObtenerRegistrosPorId(this.id).subscribe((datos:ModeloAsesor)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["email"].setValue(datos.email);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["estado"].setValue(datos.estado);
    });
  }
  EditarAsesor(){
    let nombre=this.fgValidador.controls["nombre"].value;
    let email=this.fgValidador.controls["email"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let p=new ModeloAsesor();
    p.nombre=nombre;
    p.email=email;
    p.telefono=telefono;
    p.estado=estado;
    p.administradorId='';
    p.id=this.id;
    this.servicioasesor.ActualizarAsesor(p).subscribe((datos:ModeloAsesor)=>{
      alert("Asesor actualizado correctamente");
      this.router.navigate(["/administracion/listar-asesor"])
    },(error:any)=>{
      alert("Error actualizando el asesor");4
    })
  }
}
