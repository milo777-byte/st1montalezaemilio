import { Component } from '@angular/core';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { PrimaryComponentComponent } from '../primary-component/primary-component.component';

@Component({
  selector: 'app-web-view',
  standalone: true,
  imports: [VisualizadorComponent, PrimaryComponentComponent],
  templateUrl: './web-view.component.html',
  styleUrl: './web-view.component.css'
})
export class WebViewComponent {
  color: string = 'rgb(128, 0, 128)'; // Color inicial morado

  handleColorChange(newColor: string) {
    this.color = newColor;
  }
}
