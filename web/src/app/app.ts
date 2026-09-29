import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//import { Example } from './components/example/example';

@Component({
  //imports: [RouterOutlet, Example],
  imports: [RouterOutlet
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-22-template');
}
