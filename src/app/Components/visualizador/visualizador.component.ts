import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  @Input() color: string = 'rgb(128, 0, 128)'; // Color inicial morado
  @Input() shape: string = 'square'; // Forma inicial por defecto
  @Input() password: string = ''; // Input para la contraseña
  @Input() email: string = ''; // Input para el email
  @Input() text: string = ''; // Input para el texto
  showValidationIcon: boolean = false; // Controla si se muestra el icono de validación

  isEmailValid(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo
    return emailPattern.test(this.email);
  }

  isPasswordValid(): boolean {
    return this.password.length >= 6; // Validar que la contraseña tenga al menos 6 caracteres
  }

  get validationIcon(): string {
    if (this.isEmailValid() && this.isPasswordValid()) {
      return '✔️'; // Check
    } else {
      return '❌'; // X
    }
  }

  // Método para mostrar el icono de validación
  validate() {
    this.showValidationIcon = true; // Muestra el icono al presionar el botón Aceptar
  }
}