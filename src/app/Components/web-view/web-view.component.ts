import { Component, ViewChild } from '@angular/core';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { PrimaryComponentComponent } from '../primary-component/primary-component.component';
import { SecondaryComponentComponent } from '../secondary-component/secondary-component.component';
import { ContrasenaComponent } from '../contrasena/contrasena.component';
import { EMailComponent } from '../e-mail/e-mail.component'; 
import { TextoComponent } from '../texto/texto.component'; 
import { AcceptComponentComponent } from '../accept-component/accept-component.component'; 
import { CancelComponentComponent } from '../cancel-component/cancel-component.component'; // Asegúrate de importar el componente

@Component({
  selector: 'app-web-view',
  standalone: true,
  imports: [
    VisualizadorComponent, 
    PrimaryComponentComponent, 
    SecondaryComponentComponent, 
    ContrasenaComponent, 
    EMailComponent, 
    TextoComponent, 
    AcceptComponentComponent,
    CancelComponentComponent // Asegúrate de incluir el componente
  ],
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.css']
})
export class WebViewComponent {
  color: string = 'rgb(128, 0, 128)'; // Color inicial morado
  shape: string = 'square'; // Forma inicial por defecto
  password: string = ''; // Variable para almacenar la contraseña
  email: string = ''; // Variable para almacenar el correo electrónico
  text: string = ''; // Variable para almacenar el texto

  @ViewChild(VisualizadorComponent) visualizador!: VisualizadorComponent; // Referencia al componente Visualizador

  handleColorChange(newColor: string) {
    this.color = newColor;
  }

  handleShapeChange(newShape: string) {
    this.shape = newShape;
  }

  handlePasswordChange(newPassword: string) {
    this.password = newPassword; // Actualiza la contraseña
  }

  handleEmailChange(newEmail: string) {
    this.email = newEmail; // Actualiza el email
  }

  handleTextChange(newText: string) {
    this.text = newText; // Actualiza el texto
  }

  onAccept() {
    this.visualizador.validate(); // Llama al método validate del VisualizadorComponent
  }

  onCancel() {
    this.password = ''; // Limpiar la contraseña
    this.email = ''; // Limpiar el email
    this.text = ''; // Limpiar el texto
    this.color = 'rgb(128, 0, 128)'; // Restablecer color inicial
    this.shape = 'square'; // Restablecer forma inicial
    this.visualizador.showValidationIcon = false; // Ocultar el icono de validación
  }
}