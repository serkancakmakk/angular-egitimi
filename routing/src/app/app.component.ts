import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:`
  <!-- href kullanmak spa yapısını bozduğu için routerLink Kullanıyoruz. -->
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'routing';
}
