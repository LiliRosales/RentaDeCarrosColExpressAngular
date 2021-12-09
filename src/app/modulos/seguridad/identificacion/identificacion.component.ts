import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as cryptoJS from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
//import {SeguridadService} from './../../'

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'administrador': ['', [Validators.required, Validators.email]],
    //Por ahora hacer el inicio de sesion de un administrador, queda pendiente el asesor y cliente
    //'asesor': ['', [Validators.required, Validators.email]],
    //'cliente': ['', [Validators.required, Validators.email]],
    'clave':['',[Validators.required]]

  });
  constructor(private fb: FormBuilder,
    private servicioseguridad:SeguridadService,
    private router:Router
    ) { }
    //private servicioSeguridad: SeguridadService
  ngOnInit(): void {
  }

  Identificaradministrador(){
    let administrador =this.fgValidador.controls["administrador"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioseguridad.Identificaradmin(administrador, claveCifrada).subscribe((datos:any)=>{
      //ok
      alert("Datos correctos")
      this.servicioseguridad.AlmacenarSesionadmin(datos);
      this.router.navigate(['/inicio'])
    },(error:any)=>{
      //KO
      alert("Datos invalidos")
    })
  }
}
