import { ModeloDatos } from "./datos.modelo";

export class ModeloIdentifica{
    datos?:ModeloDatos;
    tk?=String;
    estaidentificado:boolean=false;
    aministrador:boolean=false;
    asesor:boolean=false;
    cliente:boolean=false;
}