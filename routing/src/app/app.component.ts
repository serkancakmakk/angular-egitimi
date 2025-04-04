import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  template:`
  <!-- href kullanmak spa yapısını bozduğu için routerLink Kullanıyoruz. -->
  <router-outlet></router-outlet>
  <nav>
    <li>
    <a routerLink="">Home</a>
    </li>
    <li>
    <a routerLink="/contact">contact</a>
    </li>
    <li>
    <a routerLink="/about">about</a>
    </li>
  </nav>
  `
})
export class AppComponent {
  title = 'routing';
}
