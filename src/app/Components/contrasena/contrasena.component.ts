import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contrasena',
  standalone: true,
  imports: [],
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css']
})
export class ContrasenaComponent {
  @Input() passwordValue: string = ''; // Recibe el valor desde el componente padre
  @Output() passwordChange = new EventEmitter<string>(); // Emite cambios hacia el componente padre

  onPasswordChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.passwordValue = input.value;

    // Validación simple: la contraseña debe tener al menos 6 caracteres
    if (this.passwordValue.length >= 6) {
      this.passwordChange.emit(this.passwordValue); // Emitir la contraseña si es válida
    } else {
      this.passwordChange.emit(''); // Emitir vacío si no es válida
    }
  }
}
