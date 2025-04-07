import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:`<h1>
    local store
  </h1>`
})
export class AppComponent {
  title = 'local-store';
  constructor(){
    //localStorage.setItem("token","asdasda")
    //console.log(localStorage.getItem("token"));
    // localStorage.removeItem("token");
    //localStorage.clear
  }
}
