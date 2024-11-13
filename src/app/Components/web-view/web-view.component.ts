import { Component } from '@angular/core';
import { VisualizadorComponent } from '../visualizador/visualizador.component';

@Component({
  selector: 'app-web-view',
  standalone: true,
  imports: [VisualizadorComponent],
  templateUrl: './web-view.component.html',
  styleUrl: './web-view.component.css'
})
export class WebViewComponent {

}
