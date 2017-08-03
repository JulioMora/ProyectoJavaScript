
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {InicioComponent} from './Componentes/inicio/inicio.component';
import {AutosUsadosComponent} from './Componentes/autos-usados/autos-usados.component';
import {AutosNuevosComponent} from './Componentes/autos-nuevos/autos-nuevos.component';
export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,

  },
  {
    path: 'autos-usados',
    component: AutosUsadosComponent
  },
  {
    path: 'autos-nuevos',
    component: AutosNuevosComponent,

  },

];
export const RoutesAppModules: ModuleWithProviders = RouterModule.forRoot(routes);
