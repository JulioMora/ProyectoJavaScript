import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AutosEntrada} from "../../Interfaces/AutosEntrada";
import {Http} from "@angular/http";

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrls: ['./editar-auto.component.css']
})
export class EditarAutoComponent implements OnInit {
  @Input() AutosInput: AutosEntrada;
  @Output() AutosOutput= new EventEmitter();
  constructor(private _http:Http) { }

  ngOnInit() {
  }
  actualizarAuto(auto:AutosEntrada,marca:string,modelo:string,anio:string,precio:number,foto:string){
    let actualizacion={
      marca:marca,
      modelo:modelo,
      anio:anio,
      precio:precio,
      foto:foto
    };
    this._http.put("http://localhost:1337/autos/"+auto.id,actualizacion).map((res)=>{return res.json})
      .subscribe(
        res=>{
          //el servidor se actualiza
          console.log("El usuario se actualizo",res);
          //let indice=this.Usuarioinput.indexOf(usuario);
          this.AutosInput.marca = marca;
          this.AutosInput.modelo=modelo;
          this.AutosInput.anio=anio;
          this.AutosInput.precio=precio;
          this.AutosInput.foto=foto;
          //this.AutosInput.nuevousado=true;
          this.AutosInput.editar = !this.AutosInput.editar;
        },
        err=>{
          //no vale  el servidor
          console.log("Hubo un error",err);
        }
      );
  }
}
