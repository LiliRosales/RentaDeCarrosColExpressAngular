import { Component, OnInit } from '@angular/core';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { ModeloAsesor } from 'src/modelos/asesor.modelo';

@Component({
  selector: 'app-buscar-asesor',
  templateUrl: './buscar-asesor.component.html',
  styleUrls: ['./buscar-asesor.component.css']
})
export class BuscarAsesorComponent implements OnInit {
  listadodeRegistros:ModeloAsesor[]=[];
  constructor(private asesorServicio:AsesorService) { }

  ngOnInit(): void {
    this.ObtenerListaAsesores();
  }

  ObtenerListaAsesores(){
    this.asesorServicio.ObtenerRegistros().subscribe((datos:ModeloAsesor[])=>{
      this.listadodeRegistros=datos;
    })
  }
}
