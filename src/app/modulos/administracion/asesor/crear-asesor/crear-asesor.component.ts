import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { ModeloAsesor } from 'src/modelos/asesor.modelo';

@Component({
  selector: 'app-crear-asesor',
  templateUrl: './crear-asesor.component.html',
  styleUrls: ['./crear-asesor.component.css']
})
export class CrearAsesorComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'email':['',[Validators.required, Validators.email]],
    'telefono':['',[Validators.required]],
    'estado':['',[Validators.required]]
  })
  constructor(private fb: FormBuilder, private servicioasesor:AsesorService, private router:Router) { }

  ngOnInit(): void {
  }
  GuardarAsesor(){
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
    this.servicioasesor.CrearAsesor(p).subscribe((datos:ModeloAsesor)=>{
      alert("Asesor almacenado correctamente");
      this.router.navigate(["/administracion/listar-asesor"])
    },(error:any)=>{
      alert("Error almacenando el asesor");4
    })
  }
}
