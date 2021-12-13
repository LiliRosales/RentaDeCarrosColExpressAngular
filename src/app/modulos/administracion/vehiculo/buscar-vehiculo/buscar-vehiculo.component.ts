import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';
import { ModeloVehiculo } from 'src/modelos/vehiculo.modelo';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.component.html',
  styleUrls: ['./buscar-vehiculo.component.css']
})
export class BuscarVehiculoComponent implements OnInit {
  listadodeRegistros:ModeloVehiculo[]=[];
  constructor(private servicioVehiculo:VehiculoService) { }

  ngOnInit(): void {
    this.ObtenerListaVehiculos()
  }
  ObtenerListaVehiculos(){
    this.servicioVehiculo.ObtenerRegistros().subscribe((datos:ModeloVehiculo[]) =>{
      this.listadodeRegistros=datos;
    })
  }
}
