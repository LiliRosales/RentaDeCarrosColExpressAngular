import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
@Component({
  selector: 'app-identificacion-asesor',
  templateUrl: './identificacion-asesor.component.html',
  styleUrls: ['./identificacion-asesor.component.css']
})
export class IdentificacionAsesorComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    
    'asesor': ['', [Validators.required, Validators.email]],
    'clave':['',[Validators.required]]

  });
  constructor(private fb: FormBuilder,
    private servicioseguridad:SeguridadService,
    private router:Router
    ) { }
  ngOnInit(): void {
  }

  Identificarasesor(){
    let asesor =this.fgValidador.controls["asesor"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioseguridad.Identificarasesor(asesor, claveCifrada).subscribe((datos:any)=>{
      //ok
      alert("Datos correctos")
      this.servicioseguridad.AlmacenarSesionasesor(datos);
      this.router.navigate(['/inicio'])
    },(error:any)=>{
      //KO
      alert("Datos invalidos")
    })
  }

}
