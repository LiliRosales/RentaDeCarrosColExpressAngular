import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
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
    ) { }
    //private servicioSeguridad: SeguridadService
  ngOnInit(): void {
  }

  Identificaradministrador(){
    let administrador =this.fgValidador.controls["administrador"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = CryptoJS.MD5(clave).toString();
  }
}
