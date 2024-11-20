import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-e-mail',
  standalone: true,
  imports: [],
  templateUrl: './e-mail.component.html',
  styleUrls: ['./e-mail.component.css']
})
export class EMailComponent {
  @Output() emailChange = new EventEmitter<string>();
  email: string = '';

  onEmailChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email = input.value;

    // Validación simple: verificar el formato del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(this.email)) {
      this.emailChange.emit(this.email); // Emitir el email si es válido
    } else {
      this.emailChange.emit(''); // Emitir vacío si no es válido
    }
  }
}