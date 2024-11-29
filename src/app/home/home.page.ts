import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage {
  // Lista de patrones posibles (pueden ser colores, secuencias de números, etc.)
  patterns: string[] = ['1234', 'ABCD', '💖👍😀', '⬆⬇⬅➡'];

  // Indice del patrón correcto en la cuadrícula (para simular el juego)
  correctPatternIndex: number = Math.floor(Math.random() * this.patterns.length);

  // Patrones a mostrar en la cuadrícula (incluye el correcto en una posición aleatoria)
  gridPatterns: string[] = [];

  // Indica si el jugador ha seleccionado el patrón correcto
  levelPassed: boolean = false;

  constructor() {
    this.setupGrid();
  }

  // Método para configurar la cuadrícula con opciones y el patrón correcto
  setupGrid(): void {
    // Copiar los patrones y seleccionar un patrón correcto
    this.gridPatterns = [...this.patterns];

    // Barajar el arreglo para que el patrón correcto esté en una posición aleatoria
    this.gridPatterns.sort(() => Math.random() - 0.5);
  }

  // Método para validar la selección
  selectPattern(selectedPattern: string): void {
    if (selectedPattern === this.patterns[this.correctPatternIndex]) {
      this.levelPassed = true; // El usuario acertó
    } else {
      this.levelPassed = false; // El usuario falló
    }
    setTimeout(() => {
      this.setupGrid(); // Reinicia la cuadrícula para el siguiente nivel
      this.levelPassed = false; // Resetea el estado del nivel
    }, 1000); // Espera 1 segundo antes de reiniciar
  }

}
