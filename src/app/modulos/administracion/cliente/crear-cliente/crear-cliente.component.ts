import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ModeloCliente } from 'src/modelos/cliente.modelo';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private servicioCliente: ClienteService,
    private router: Router
    ) { }

  fgValidador: FormGroup = this.fb.group({
    'nombre' : ['',[Validators.required]],
    'documento':['',[Validators.required]],
    'telefono' : ['',[Validators.required]],
    'email' : ['',[Validators.required]]
  })
  ngOnInit(): void {
    
  }

  GuardarCliente(){
    let nombre =this.fgValidador.controls["nombre"].value;
    let documento = this.fgValidador.controls["documento"].value;
    let email =this.fgValidador.controls["email"].value;
    let telefono =this.fgValidador.controls["telefono"].value;
    let p = new ModeloCliente();
    p.nombre = nombre;
    p.documento = documento;
    p.email = email;
    p.telefono = telefono;
    this.servicioCliente.CrearCliente(p).subscribe((datos: ModeloCliente) => {
      alert("Cliente almacenado correctamente");
      this.router.navigate(["/administracion/listar-clientes"]);
    },(error: any) => 
    alert("Error al registrar al cliente"));
  }

}
