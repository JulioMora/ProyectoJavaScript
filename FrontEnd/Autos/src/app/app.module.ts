import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import {InicioComponent} from './Componentes/inicio/inicio.component';
import {AutosUsadosComponent} from './Componentes/autos-usados/autos-usados.component';
import {AutosNuevosComponent} from './Componentes/autos-nuevos/autos-nuevos.component';
import {RoutesAppModules} from './routes';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { EditarAutoComponent } from './Componentes/editar-auto/editar-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AutosUsadosComponent,
    AutosNuevosComponent,
    EditarAutoComponent
  ],
  imports: [
    BrowserModule,
    RoutesAppModules,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
