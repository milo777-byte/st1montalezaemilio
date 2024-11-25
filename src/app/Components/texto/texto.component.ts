import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [],
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  @Input() textValue: string = ''; // Recibe el valor desde el componente padre
  @Output() textChange = new EventEmitter<string>(); // Emite cambios hacia el componente padre

  onTextChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.textValue = input.value;

    // Emitir el texto ingresado
    this.textChange.emit(this.textValue);
  }
}
