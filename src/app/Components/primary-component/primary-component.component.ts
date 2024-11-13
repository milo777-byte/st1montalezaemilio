import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-primary-component',
  standalone: true,
  imports: [],
  templateUrl: './primary-component.component.html',
  styleUrls: ['./primary-component.component.css']
})
export class PrimaryComponentComponent {
  @Output() colorChange = new EventEmitter<string>();

  onButtonClick() {
    const randomColor = this.getRandomColor();
    this.colorChange.emit(randomColor);
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}