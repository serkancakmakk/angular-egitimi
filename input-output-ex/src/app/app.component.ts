import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from "./todo-add/todo-add.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListComponent, FormsModule, CommonModule, TodoAddComponent],
  template:`
  <h1>
    Input / Output Örnek
    
  </h1>
<app-todo-add (addEvent)="add($event)"></app-todo-add>
<hr>
<ul>
  <li *ngFor="let todo of todos">
    {{todo}}
  </li>
</ul>
  `
})
export class AppComponent {
  todos:string[] = [];

  add(event:string){
    this.todos.push(event);

  }

}
