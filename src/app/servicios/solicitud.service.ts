import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSolicitud } from 'src/modelos/solicitud.modelo';
import { SeguridadService } from './seguridad.service';



@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url = 'http://localhost:3000';
  token: String = '';

  constructor(private http: HttpClient, private seguridadServicios: SeguridadService) {
    this.token = this.seguridadServicios.ObtenerToken();
   }
   //Crear solicitud
   CrearSolicitud(solicitud: ModeloSolicitud): Observable<ModeloSolicitud>{
    return this.http.post<ModeloSolicitud>(`${this.url}/solicitud`, solicitud,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
     })
  }

  //Lista de alquiler
 ObtenerRegistros():Observable<ModeloSolicitud[]>{
   return this.http.get<ModeloSolicitud[]>(`${this.url}/solicitud`)
 }
  //Lista de alquiler por Id
  ObtenerRegistrosPorId(id: String):Observable<ModeloSolicitud>{
    return this.http.get<ModeloSolicitud>(`${this.url}/vehiculos/${id}`);
  }


 //Editar de solicitud

 ActualizarSolicitud(solicitud: ModeloSolicitud): Observable<ModeloSolicitud>{
   return this.http.put<ModeloSolicitud>(`${this.url}/solicitud/${solicitud.id}`, solicitud,{
     headers: new HttpHeaders({
       'Authorization':`Bearer${this.token}`
     })
   })

 }
 //Eliminar solicitud
 EliminarSolicitud(id:string):Observable<any>{
   return this.http.delete(`${this.url}/solicitud/${id}`,{
     headers : new HttpHeaders({
       'Authorization':`Bearer${this.token}`
     })
   })
 }


 
}

