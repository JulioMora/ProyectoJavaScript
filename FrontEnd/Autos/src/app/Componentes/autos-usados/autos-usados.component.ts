import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AutosClass} from "../../Clases/Auto";
import {Http} from "@angular/http";
import {AutosEntrada} from "../../Interfaces/AutosEntrada";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-autos-usados',
  templateUrl: './autos-usados.component.html',
  styleUrls: ['./autos-usados.component.css']
})
export class AutosUsadosComponent implements OnInit {

  autos:AutosClass[] = [];
  @Input() AutosInput: AutosEntrada;
  @Output() AutosOutput= new EventEmitter();
  autos1: AutosEntrada[] = [];
  nuevoAuto:AutosClass=new AutosClass("");

  constructor(private _http:Http) { }

  ngOnInit() {
    this._http
      .get("http://localhost:1337/Autos/")
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
  eliminarAutoBackend(auto: AutosEntrada) {

    this._http.delete("http://localhost:1337/autos?id="+auto.id)
      .subscribe(
        respuesta=>{
          this.AutosOutput.emit(auto);
          //this.pelis.splice(this.pelis.indexOf(peli),1)
        },
        error=>{
          console.log("Error",error);
        }
      )

  }
  eliminarAutoFrontEnd(auto: AutosEntrada) {

    let indice = this.autos1.indexOf(auto);

    this.autos1.splice(indice,1);

  }
}
