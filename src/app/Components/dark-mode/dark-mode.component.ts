import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent {
  isDarkMode: boolean = false; // Variable para rastrear el estado del modo oscuro

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode; // Alternar el estado del modo oscuro
    this.applyDarkMode();
  }

  applyDarkMode() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode'); // Agregar clase para el modo oscuro
    } else {
      document.body.classList.remove('dark-mode'); // Remover clase para el modo claro
    }
  }
}