import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accept-component',
  standalone: true,
  imports: [],
  templateUrl: './accept-component.component.html',
  styleUrls: ['./accept-component.component.css']
})
export class AcceptComponentComponent {
  @Output() acceptClick = new EventEmitter<void>(); // Emitir evento al hacer clic

  onButtonClick() {
    this.acceptClick.emit(); // Emitir el evento al hacer clic en el botón
  }
}