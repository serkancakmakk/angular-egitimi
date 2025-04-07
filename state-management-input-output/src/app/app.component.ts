import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from "./example/example.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppComponent, ExampleComponent],
  template:`
  <h1> State management - Input Output</h1>
  <hr>
  <p>
    Benim adım <strong>{{name}}</strong>
  </p>
  <app-example (changeNameEvent)="changeName($event)" [name]="name"></app-example>
  `
})
export class AppComponent {
  title = 'state-management-input-output';
  name:string = "Serkan";
  changeName(event:string){
    this.name = event;
  }
}
