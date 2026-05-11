import { Component } from '@angular/core';
import { Inscripcion } from '../../services/inscripcion';
import { InscripcionPlantilla } from '../../models/inscripcionPlantilla';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscripciones',
  imports: [CommonModule, FormsModule],
  templateUrl: './inscripciones.html',
  styleUrl: './inscripciones.css',  
  standalone: true
})
export class Inscripciones {

  inscripcion: InscripcionPlantilla = {
    dni: 0,
    precio: 0,
    categoriaAlumno: 0,
    fechaInscripcion: '',
    email: '',
    curso: '',
    total: 0
  };

  constructor(private servicio: Inscripcion) { }
  calcularTotal(): void {
    let descuento = 0;
    if (this.inscripcion.categoriaAlumno == 1) {
      descuento = 0.35;
    } else if (this.inscripcion.categoriaAlumno == 2) {
      descuento = 0.50;
    }
    this.inscripcion.total =
      this.inscripcion.precio -
      (this.inscripcion.precio * descuento);
  }

  registrar(): void {
    this.servicio.agregar({ ...this.inscripcion });
    this.limpiar();
  }

  limpiar(): void {
    this.inscripcion = {
      dni: 0,
      precio: 0,
      categoriaAlumno: 0,
      fechaInscripcion: '',
      email: '',
      curso: '',
      total: 0
    };
  }

  obtenerInscripciones(): InscripcionPlantilla[] {
    return this.servicio.obtener();
  }

  eliminar(index: number): void {
    this.servicio.eliminar(index);
  }

  contarCategoria(categoria: number): number {
    return this.obtenerInscripciones()
      .filter(i => i.categoriaAlumno == categoria)
      .length;
  }

  totalGeneral(): number {
    return this.obtenerInscripciones()
      .reduce((acum, i) => acum + i.total, 0);
  }
}
