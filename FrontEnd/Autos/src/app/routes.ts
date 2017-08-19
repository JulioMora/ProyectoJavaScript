
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {InicioComponent} from './Componentes/inicio/inicio.component';
import {AutosUsadosComponent} from './Componentes/autos-usados/autos-usados.component';
import {AutosNuevosComponent} from './Componentes/autos-nuevos/autos-nuevos.component';
import {EditarAutoComponent} from "./Componentes/editar-auto/editar-auto.component";
import {EditarAutoNuevoComponent} from "./Componentes/editar-auto-nuevo/editar-auto-nuevo.component";
export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,

  },
  {
    path: 'autos-usados',
    component: AutosUsadosComponent,


  },
  {path:'editarauto/:idAuto',
    component:EditarAutoComponent,
  },
  {
    path: 'autos-nuevos',
    component: AutosNuevosComponent,

  },
  {path:'editarauto-nuevo/:idAuto',
    component:EditarAutoNuevoComponent,
  },

];
export const RoutesAppModules: ModuleWithProviders = RouterModule.forRoot(routes);
