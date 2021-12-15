import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloIdentifica } from 'src/modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url = 'http://localhost:3000';
  datosUsuarioenSesion= new BehaviorSubject<ModeloIdentifica>(new ModeloIdentifica());
  
  constructor(private http: HttpClient) { 
    this.VerificarSesionActual();
  }
  VerificarSesionActual(){
    let datos=this.Obtenerinformacionsesion();
    if(datos){
      this.RefrecarDatosSesion(datos);
    }
  }
  RefrecarDatosSesion(datos:ModeloIdentifica){
    this.datosUsuarioenSesion.next(datos);
  }
  Identificaradmin(usuario:string, clave:string):Observable<ModeloIdentifica> {
    return this.http.post<ModeloIdentifica>(`${this.url}/identificaradministrador`,{
      usuario:usuario,
      clave:clave
    },{headers: new HttpHeaders({

      })
    })


  }
  AlmacenarSesionadmin(datos:ModeloIdentifica){
    datos.estaidentificado=true;
    datos.aministrador=true;
    let stringDatos=JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrecarDatosSesion(datos);
  }
  Obtenerinformacionsesion(){
    let datosString=localStorage.getItem("datosSesion");
    if (datosString) {
      let datos=JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }
  Eliminarinformacionsesion(){
    localStorage.removeItem("datosSesion");
    this.RefrecarDatosSesion(new ModeloIdentifica());

  }
  SeHaIniciadoSesion(){
    let stringDatos=localStorage.getItem("datosSesion"); 
    return stringDatos;
  }
  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioenSesion.asObservable();
  }

  ObtenerToken(){
    let datosString=localStorage.getItem("datosSesion");
    if (datosString) {
      let datos=JSON.parse(datosString);
      return datos.tk;
    }else{
      return '';
    }
  }
  
  //asesor
  Identificarasesor(usuario:string, clave:string):Observable<ModeloIdentifica>{
    return this.http.post<ModeloIdentifica>(`${this.url}/identificarasesor`,{
      usuario:usuario,
      clave:clave
    },{headers: new HttpHeaders({

      })
    })
  }
  AlmacenarSesionasesor(datos:ModeloIdentifica){
    datos.estaidentificado=true;
    datos.asesor=true;
    let stringDatos=JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrecarDatosSesion(datos);
  }
  //Cliente
  Identificarcliente(usuario:string, clave:string):Observable<ModeloIdentifica>{
    return this.http.post<ModeloIdentifica>(`${this.url}/identificarcliente`,{
      usuario:usuario,
      clave:clave
    },{headers: new HttpHeaders({

      })
    })
  }
  AlmacenarSesioncliente(datos:ModeloIdentifica){
    datos.estaidentificado=true;
    datos.cliente=true;
    let stringDatos=JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrecarDatosSesion(datos);
  }
 //Solicitud
 IdentificarSolicitud(usuario:string, clave:string):Observable<ModeloIdentifica>{
  return this.http.post<ModeloIdentifica>(`${this.url}/identificarsolicitud`,{
    usuario:usuario,
    clave:clave
  },{headers: new HttpHeaders({

    })
  })
}
Almacenarsolicitud(datos:ModeloIdentifica){
  datos.estaidentificado=true;
  datos.cliente=true;
  let stringDatos=JSON.stringify(datos);
  localStorage.setItem("datosSesion",stringDatos);
  this.RefrecarDatosSesion(datos);
}

  //obtener id de la sesion
  ObtenerIdSesion(){
    let datosString=localStorage.getItem("datosSesion");
    if (datosString) {
      let datos=JSON.parse(datosString);
      return datos.datos.id;
    }else{
      return '';
    }
  }
}

