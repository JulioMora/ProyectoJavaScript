import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AutosClass} from "../../Clases/Auto";
import {AutosEntrada} from "../../Interfaces/AutosEntrada";
import {Http} from "@angular/http";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  autos:AutosClass[] = [];
  @Input() AutosInput: AutosEntrada;
  @Output() AutosOutput= new EventEmitter();
  autos1: AutosEntrada[] = [];
  nuevoAuto:AutosClass=new AutosClass("");
  constructor(private _http:Http) { }

  ngOnInit() {
  }
  crearUsuario(UsuarioFormulario)
  {
    console.log("Entro a crear Usuario");

    console.log(UsuarioFormulario);

    console.log(this.nuevoAuto);
    this._http.post("http://localhost:1337/autos",this.nuevoAuto).subscribe(respuesta=>{
        let respuestaJson = respuesta.json();
        console.log('respuestaJson: ',respuestaJson);
        this.autos.push(respuestaJson)
      },
      error=>{
        console.log("Error ",error);
      }
    )
    //el subscribe me sirve para los rquest

  }
}
