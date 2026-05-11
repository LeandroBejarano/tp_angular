import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css'
})

export class Punto3 {

  cartas: any[] = [];
  cartasSeleccionadas: any[] = [];
  intentos: number = 10;
  juegoIniciado: boolean = false;
  bloqueo: boolean = false;
  imagenes = [
    'cartas/1.png',
    'cartas/2.png',
    'cartas/3.png',
    'cartas/4.png',
    'cartas/5.png',
    'cartas/6.png',
  ];
  iniciarJuego(): void {
    this.reiniciarJuego();
    this.juegoIniciado = true;
  }
  reiniciarJuego(): void {
    this.intentos = 10;
    this.cartasSeleccionadas = [];
    this.bloqueo = false;
    let duplicadas = [...this.imagenes, ...this.imagenes];
    duplicadas.sort(() => Math.random() - 0.5);
    this.cartas = duplicadas.map((img, index) => ({
      id: index,
      img: img,
      descubierta: false,
      encontrada: false
    }));
  }

  seleccionarCarta(carta: any): void {
    if (!this.juegoIniciado) return;
    if (this.bloqueo) return;
    if (carta.encontrada) return;
    if (this.cartasSeleccionadas.includes(carta)) return;
    if (this.cartasSeleccionadas.length >= 2) return;
    this.cartasSeleccionadas.push(carta);
  }

  intentar(): void {
    if (this.cartasSeleccionadas.length != 2) {
      alert('Debes seleccionar 2 cartas');
      return;
    }
    this.bloqueo = true;
    this.cartasSeleccionadas.forEach(c => {
      c.descubierta = true;
    });
    setTimeout(() => {
      this.verificarPareja();
    }, 500);
  }

  verificarPareja(): void {
    let [carta1, carta2] = this.cartasSeleccionadas;
    if (carta1.img == carta2.img) {
      carta1.encontrada = true;
      carta2.encontrada = true;
      this.cartasSeleccionadas = [];
      this.bloqueo = false;
      this.verificarVictoria();
    } else {
      this.intentos--;
      setTimeout(() => {
        carta1.descubierta = false;
        carta2.descubierta = false;
        this.cartasSeleccionadas = [];
        this.bloqueo = false;
        this.verificarFinJuego();
      }, 1000);
    }
  }

  verificarVictoria(): void {
    let ganadas = this.cartas.every(c => c.encontrada);
    if (ganadas) {
      alert('¡Ganaste!');
      this.juegoIniciado = false;
    }
  }

  verificarFinJuego(): void {
    if (this.intentos <= 0) {
      alert('Perdiste');
      this.juegoIniciado = false;
    }
  }
}