import { Injectable } from '@angular/core';
import { InscripcionPlantilla } from '../models/inscripcionPlantilla';

@Injectable({
  providedIn: 'root',
})
export class Inscripcion {

  private inscripciones: InscripcionPlantilla[] = [];

  agregar(inscripcion: InscripcionPlantilla): void {
    this.inscripciones.push(inscripcion);
  }

  obtener(): InscripcionPlantilla[] {
    return this.inscripciones;
  }

  eliminar(index: number): void {
    this.inscripciones.splice(index, 1);
  }
}
