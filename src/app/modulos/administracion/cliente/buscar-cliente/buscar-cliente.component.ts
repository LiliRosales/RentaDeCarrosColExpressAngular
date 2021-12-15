import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ModeloCliente } from 'src/modelos/cliente.modelo';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {

  listadoRegistros: ModeloCliente[] = [];

  constructor(private clienteServicio: ClienteService) { }

  ngOnInit(): void {
    this.ObtenerListadoClientes();
  }

  ObtenerListadoClientes(){
    this.clienteServicio.ObtenerRegistros().subscribe((datos: ModeloCliente[]) =>{
      this.listadoRegistros = datos;
    })
  }

}
