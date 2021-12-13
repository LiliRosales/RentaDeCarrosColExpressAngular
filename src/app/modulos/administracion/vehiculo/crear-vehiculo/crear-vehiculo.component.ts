import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';
import { ModeloVehiculo } from 'src/modelos/vehiculo.modelo';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  
 fgValidador: FormGroup= this.fb.group({
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
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarVehiculo(){
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

    this.servicioVehiculo.CrearVehiculo(p).subscribe((datos: ModeloVehiculo) =>{
      alert("Vehiculo Almacenado correctamente");
      this.router.navigate(["/administracion/listar-vehiculo"]);
    }, (error: any) =>{
      alert("Error almacenando el vehiculo");
    })
}

}
