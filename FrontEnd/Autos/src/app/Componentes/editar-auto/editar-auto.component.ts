import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AutosEntrada} from "../../Interfaces/AutosEntrada";
import {Http} from "@angular/http";
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrls: ['./editar-auto.component.css']
})
export class EditarAutoComponent implements OnInit {
  @Input() AutosInput: AutosEntrada;
  @Output() AutosOutput= new EventEmitter();
  autos1: AutosEntrada[]=[];

  constructor(private _http:Http, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    console.log(params.idAuto);
    this._http
      .get("http://localhost:1337/Autos?id="+params.idAuto)
      .subscribe(
        respuesta=>{
          let rjson:AutosEntrada[] = respuesta.json();

          this.autos1 = rjson;

          /*
           //anadir propiedades a objetos
           let objeto1:any = {
           prop1:1,
           prop2:2
           }
           objeto1.prop3 = 3;
           */

          console.log("Autos: ",this.autos1);
        },
        error=>{
          console.log("Error: ",error)

        }
      )
  }
  actualizarAuto(auto:AutosEntrada,marca:string,modelo:string,anio:string,precio:number,foto:string){

    let params: any = this.activatedRoute.snapshot.params;
    let actualizacion={
      marca:marca,
      modelo:modelo,
      anio:anio,
      precio:precio,
      foto:foto
    };
    this._http.put("http://localhost:1337/autos/"+params.idAuto,actualizacion).map((res)=>{return res.json})
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
