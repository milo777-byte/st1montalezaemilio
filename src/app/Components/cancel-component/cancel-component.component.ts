import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-component',
  standalone: true,
  imports: [],
  templateUrl: './cancel-component.component.html',
  styleUrls: ['./cancel-component.component.css']
})
export class CancelComponentComponent {
  @Output() cancelClick = new EventEmitter<void>(); // Emitir evento al hacer clic

  onButtonClick() {
    this.cancelClick.emit(); // Emitir el evento al hacer clic en el botón
  }
}