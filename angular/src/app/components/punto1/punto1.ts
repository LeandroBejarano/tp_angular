import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {

  indiceActual: number = 0;

  eventos = [
    {
      nombre: 'Taller de Yoga',
      descripcion: 'Clase de relajación y meditación.',
      img: 'assets/evento01.jpg'
    },
    {
      nombre: 'Conferencia Tech',
      descripcion: 'Evento sobre nuevas tecnologías.',
      img: 'assets/evento02.jpg'
    },
    {
      nombre: 'Festival de Música',
      descripcion: 'Presentación de bandas en vivo.',
      img: 'assets/evento03.jpg'
    }
  ];

  siguiente(): void {

    if (this.indiceActual < this.eventos.length - 1) {
      this.indiceActual++;
    } else {
      this.indiceActual = 0;
    }

  }

  anterior(): void {

    if (this.indiceActual > 0) {
      this.indiceActual--;
    } else {
      this.indiceActual = this.eventos.length - 1;
    }

  }
}
