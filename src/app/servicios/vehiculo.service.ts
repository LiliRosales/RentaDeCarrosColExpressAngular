import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from 'src/modelos/vehiculo.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url='http://localhost:3000'
  token:String='';
  constructor(private http: HttpClient, private servicioseguridad:SeguridadService) { }
  //lista de Vehiculos
  ObtenerRegistros():Observable<ModeloVehiculo[]>{
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`)
  }
}
