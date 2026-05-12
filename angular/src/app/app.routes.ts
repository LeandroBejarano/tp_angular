import { Routes } from '@angular/router';

import { Punto1 } from './components/punto1/punto1';
import { Punto2 } from './components/punto2/punto2';
import { Punto3 } from './components/punto3/punto3';
import { Inscripciones } from './components/inscripciones/inscripciones';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'punto1',
        pathMatch: 'full'
    },
    {
        path: 'punto1',
        component: Punto1
    },
    {
        path: 'punto2',
        component: Punto2
    },
    {
        path: 'punto3',
        component: Punto3
    },
    {
        path: 'inscripciones',
        component: Inscripciones
    }

];