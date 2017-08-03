import {Component, Input, OnInit} from '@angular/core';
import {AutosClass} from "../../Clases/Auto";
import {Http} from "@angular/http";
import {AutosEntrada} from "../../Interfaces/AutosEntrada";
@Component({
  selector: 'app-autos-usados',
  templateUrl: './autos-usados.component.html',
  styleUrls: ['./autos-usados.component.css']
})
export class AutosUsadosComponent implements OnInit {

  autos:AutosClass[] = [];
  @Input() AutosInput: AutosEntrada;
  autos1: AutosEntrada[] = [];

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

}
