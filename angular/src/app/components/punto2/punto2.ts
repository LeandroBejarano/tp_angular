import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {

  productos = [

    {
      nombre: 'Notebook Asus 13L',
      descripcion: 'Disco SSD 40GB - 15 pulgadas',
      img: 'notebook.jpg',
      precio: 180000
    },

    {
      nombre: 'Monitor LG 24',
      descripcion: 'Monitor Full HD',
      img: 'monitor.jpg',
      precio: 200000
    },

    {
      nombre: 'Mouse Gamer',
      descripcion: 'RGB inalámbrico',
      img: 'mouse.jpg',
      precio: 10000
    }

  ];

  carrito: any[] = [];

  agregarCarrito(producto: any): void {

    this.carrito.push(producto);

  }

  calcularTotal(): number {

    let total = 0;

    for (let producto of this.carrito) {

      total += producto.precio;

    }

    return total;

  }
}
