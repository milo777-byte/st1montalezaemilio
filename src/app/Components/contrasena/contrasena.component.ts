import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contrasena',
  standalone: true,
  imports: [],
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css']
})
export class ContrasenaComponent {
  @Output() passwordChange = new EventEmitter<string>();
  password: string = '';

  onPasswordChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;

    // Validación simple: la contraseña debe tener al menos 6 caracteres
    if (this.password.length >= 6) {
      this.passwordChange.emit(this.password); // Emitir la contraseña si es válida
    } else {
      this.passwordChange.emit(''); // Emitir vacío si no es válida
    }
  }
}