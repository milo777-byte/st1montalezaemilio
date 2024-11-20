import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [],
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  @Output() textChange = new EventEmitter<string>();
  text: string = '';

  onTextChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.text = input.value;

    // Emitir el texto ingresado
    this.textChange.emit(this.text);
  }
}