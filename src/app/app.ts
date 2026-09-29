import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
//import { Example } from './components/example/example';

@Component({
  //imports: [RouterOutlet, Example],
  imports: [RouterOutlet, Menu, Header, Footer
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-22-template');
}
