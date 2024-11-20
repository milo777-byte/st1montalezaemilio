import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  standalone: true,
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css'],
})
export class DarkModeComponent {
  @Output() modeChange = new EventEmitter<boolean>();
  isDarkMode = false;

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    this.modeChange.emit(this.isDarkMode); // Emite el estado actual
  }
}
