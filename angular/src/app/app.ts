import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Punto1 } from './components/punto1/punto1';
import { Punto2 } from './components/punto2/punto2';
import { Punto3 } from './components/punto3/punto3';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inscripciones } from './components/inscripciones/inscripciones';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Punto1, Punto2, Punto3, CommonModule, FormsModule, Inscripciones],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('angular');
}
