<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> 78cb21a3eda9cf9b400d1ac02f3e583f04ef78f0
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from 'src/modelos/vehiculo.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  url = 'http://localhost:3000';
  token: String = '';

  constructor(private http: HttpClient, private seguridadServicios: SeguridadService) {
    this.token = this.seguridadServicios.ObtenerToken();
   }


   //Crear vehiculo
   CrearVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
     return this.http.post<ModeloVehiculo>(`${this.url}/vehiculos`, vehiculo,{
       headers: new HttpHeaders({
         'Authorization':`Bearer ${this.token}`
       })
      })
   }

   //Lista de vehiculos
  ObtenerRegistros():Observable<ModeloVehiculo[]>{
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`)
  }

  //Lista de vehiculos por Id
  ObtenerRegistrosPorId(id: String):Observable<ModeloVehiculo>{
    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`);
  }

  //Editar vehiculo

  ActualizarVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
    return this.http.put<ModeloVehiculo>(`${this.url}/vehiculos/${vehiculo.id}`, vehiculo,{
      headers: new HttpHeaders({
        'Authorization':`Bearer${this.token}`
      })
    })

  }
  //Eliminar vehiculo
  EliminarVehiculo(id:string):Observable<any>{
    return this.http.delete(`${this.url}/vehiculos/${id}`,{
      headers : new HttpHeaders({
        'Authorization':`Bearer${this.token}`
      })
    })
  }
}
