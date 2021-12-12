import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-eliminar-asesor',
  templateUrl: './eliminar-asesor.component.html',
  styleUrls: ['./eliminar-asesor.component.css']
})
export class EliminarAsesorComponent implements OnInit {
  id:string='';
  constructor( private servicioasesor:AsesorService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.EliminarAsesor();
    this.router.navigate(["/administracion/listar-asesor"])
  }
  EliminarAsesor(){
    this.servicioasesor.EliminarAsesor(this.id).subscribe((id:string)=>{
      
      alert("Asesor eliminado correctamente");
    },(error:any)=>{
      
      alert("Error eliminando el asesor");4
    })

  }
}
