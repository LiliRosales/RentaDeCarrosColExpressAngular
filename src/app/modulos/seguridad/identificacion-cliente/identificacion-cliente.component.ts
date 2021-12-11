import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
@Component({
  selector: 'app-identificacion-cliente',
  templateUrl: './identificacion-cliente.component.html',
  styleUrls: ['./identificacion-cliente.component.css']
})
export class IdentificacionClienteComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    
    'cliente': ['', [Validators.required, Validators.email]],
    'clave':['',[Validators.required]]

  });
  constructor(private fb: FormBuilder,
    private servicioseguridad:SeguridadService,
    private router:Router
    ) { }
  ngOnInit(): void {
  }
  Identificarcliente(){
    let cliente =this.fgValidador.controls["cliente"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioseguridad.Identificarcliente(cliente, claveCifrada).subscribe((datos:any)=>{
      //ok
      alert("Datos correctos")
      this.servicioseguridad.AlmacenarSesioncliente(datos);
      this.router.navigate(['/inicio'])
    },(error:any)=>{
      //KO
      alert("Datos invalidos")
    })
  }

}
