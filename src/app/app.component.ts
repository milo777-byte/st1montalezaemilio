import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebViewComponent } from './Components/web-view/web-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WebViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
