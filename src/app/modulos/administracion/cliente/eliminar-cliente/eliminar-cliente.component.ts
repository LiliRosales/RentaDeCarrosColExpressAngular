import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ModeloCliente } from 'src/modelos/cliente.modelo';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {
  id:any = "";
  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'documento':['',[Validators.required]],
    'telefono' : ['',[Validators.required]],
    'email' : ['',[Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private servicioCliente: ClienteService,
    private router: Router,
    private route: ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }

  BuscarProducto(){
    this.servicioCliente.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloCliente) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["documento"].setValue(datos.documento);
      this.fgValidador.controls["email"].setValue(datos.email);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
    })
  }

  EliminarCliente(){
    let nombre =this.fgValidador.controls["nombre"].value;
    let documento = this.fgValidador.controls["documento"].value;
    let email =this.fgValidador.controls["email"].value;
    let telefono =this.fgValidador.controls["telefono"].value;
    let p = new ModeloCliente();
    p.nombre = nombre;
    p.documento = documento;
    p.email = email;
    p.telefono = telefono;
    p.id = this.id; 
    this.servicioCliente.EliminarCliente(this.id).subscribe((datos: ModeloCliente) => {
      alert("Cliente Eliminado correctamente");
      this.router.navigate(["/administracion/listar-clientes"]);
    },(error: any) => 
    alert("Error al Eliminar al cliente"));
  }

}
