import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-component',
  standalone: true,
  imports: [],
  templateUrl: './secondary-component.component.html',
  styleUrls: ['./secondary-component.component.css']
})
export class SecondaryComponentComponent {
  @Output() shapeChange = new EventEmitter<string>();
  private isCircle: boolean = false; // Variable para rastrear la forma actual

  onButtonClick() {
    this.isCircle = !this.isCircle; // Cambiar el estado
    const newShape = this.isCircle ? 'circle' : 'square'; // Alternar entre 'circle' y 'square'
    this.shapeChange.emit(newShape); // Emitir el nuevo valor de forma
  }
}