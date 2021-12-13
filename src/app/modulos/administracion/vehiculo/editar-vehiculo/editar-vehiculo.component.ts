import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';
import { ModeloVehiculo } from 'src/modelos/vehiculo.modelo';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  id : String = '';
  
  fgValidador: FormGroup= this.fb.group({

    'id': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'departamento': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'detalles': ['', [Validators.required]],
    'placa': ['', [Validators.required]],
    'color': ['', [Validators.required]],
    'modelo': ['', [Validators.required]],
 
 
  })
  constructor(private fb: FormBuilder, 
    private servicioVehiculo: VehiculoService,
    private router: Router,
    private route: ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){
    this.servicioVehiculo.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloVehiculo) =>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
      this.fgValidador.controls["departamento"].setValue(datos.departamento);
      this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["detalles"].setValue(datos.detalles);
      this.fgValidador.controls["placa"].setValue(datos.placa);
      this.fgValidador.controls["color"].setValue(datos.color);
      this.fgValidador.controls["modelo"].setValue(datos.modelo);

    });
  }

  EditarVehiculo(){

    let tipo = this.fgValidador.controls["tipo"].value;
    let departamento = this.fgValidador.controls["departamento"].value;
    let ciudad = this.fgValidador.controls["ciudad"].value;
    let estado = parseFloat(this.fgValidador.controls["estado"].value);
    let detalles = this.fgValidador.controls["detalles"].value;
    let placa = this.fgValidador.controls["placa"].value;
    let color = this.fgValidador.controls["color"].value;
    let modelo = this.fgValidador.controls["modelo"].value;

    let p = new ModeloVehiculo();

    p.tipo= tipo;
    p.departamento = departamento;
    p.ciudad = ciudad;
    p.estado = estado;
    p.detalles = detalles;
    p.placa = placa;
    p.color = color;
    p.modelo = modelo;
    p.id = this.id;


    this.servicioVehiculo.ActualizarVehiculo(p).subscribe((datos:ModeloVehiculo) =>{
      alert("Vehiculo Actualizado Correctamente");
      this.router.navigate(["/administracion/buscar-vehiculo"]);
    },(error: any) =>{
      alert("Error Actualizando el Vehiculo");
    })

  }
}
