import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloAsesor } from 'src/modelos/asesor.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  constructor(private http: HttpClient, private servicioseguridad:SeguridadService) {
    this.token=this.servicioseguridad.ObtenerToken();
    this.idSesion=this.servicioseguridad.ObtenerIdSesion();
   }
  url='http://localhost:3000'
  token:String='';
  idSesion:String='';
  //lista de asesor
  ObtenerRegistros():Observable<ModeloAsesor[]>{
    return this.http.get<ModeloAsesor[]>(`${this.url}/asesors`)
  }
  //crear asesor
  CrearAsesor(asesor: ModeloAsesor):Observable<ModeloAsesor> {
    return this.http.post<ModeloAsesor>(`${this.url}/asesors`,{
      id:asesor.id,
      nombre:asesor.nombre,
      email:asesor.email,
      clave:asesor.clave,
      telefono:asesor.telefono,
      estado:asesor.estado,
      administradorId:this.idSesion
    },{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      
      })
    })
  }
  ActualizarAsesor(asesor: ModeloAsesor):Observable<ModeloAsesor> {
    return this.http.put<ModeloAsesor>(`${this.url}/asesors/${asesor.id}`,{id:asesor.id,
      nombre:asesor.nombre,
      email:asesor.email,
      clave:asesor.clave,
      telefono:asesor.telefono,
      estado:asesor.estado,
      administradorId:this.idSesion},{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      
      })
    })
  }
  EliminarAsesor(id:String):Observable<any> {
    return this.http.delete(`${this.url}/asesors/${id}`,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      
      })
    })
  }
  //se busca por id 
  ObtenerRegistrosPorId(id:string):Observable<ModeloAsesor>{
    return this.http.get<ModeloAsesor>(`${this.url}/asesors/${id}`)
  }
}

