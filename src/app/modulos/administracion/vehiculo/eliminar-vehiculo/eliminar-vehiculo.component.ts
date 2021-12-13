import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-eliminar-vehiculo',
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrls: ['./eliminar-vehiculo.component.css']
})
export class EliminarVehiculoComponent implements OnInit {

  id:string='';
  constructor(private servicioVehiculo: VehiculoService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.EliminarVehiculo();
    this.router.navigate(["/administracion/listar-vehiculo"])
  }

  EliminarVehiculo(){
    this.servicioVehiculo.EliminarVehiculo(this.id).subscribe((id:string)=>{
      
      alert("Vehiculo eliminado correctamente");
    },(error:any)=>{
      
      alert("Error eliminando el vehiculo");4
    })

  }

}
