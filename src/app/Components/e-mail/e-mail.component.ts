import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-e-mail',
  standalone: true,
  imports: [],
  templateUrl: './e-mail.component.html',
  styleUrls: ['./e-mail.component.css']
})
export class EMailComponent {
  @Input() emailValue: string = ''; // Recibe el valor desde el padre
  @Output() emailChange = new EventEmitter<string>();

  onEmailChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.emailValue = input.value;

    // Validación simple: verificar el formato del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(this.emailValue)) {
      this.emailChange.emit(this.emailValue); // Emitir el email si es válido
    } else {
      this.emailChange.emit(''); // Emitir vacío si no es válido
    }
  }
}
