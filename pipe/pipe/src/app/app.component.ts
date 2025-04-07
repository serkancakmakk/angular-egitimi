import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoPipe } from './todo.pipe';
import { NamePipe } from './name.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TodoPipe,FormsModule,NamePipe,CommonModule],
  template:`
  <h1>pipe</h1>
  <div>
    
    <input [(ngModel)]="work">
    <button (click)="save()">Save</button>
  </div>
  <p>
    {{name | name}}
  </p>
  <div>
  <input [(ngModel)]="search" type="search">
    <ul>
      @for(todo of todos | todo:search;track todo){
        <li>{{todo}}</li>
      }
    </ul>
  </div>
  <hr>
  <h1>{{num | currency:'TRY':'symbol-narrow' }}</h1>
  <h1>Angular def pipe</h1>
  <h1>{{name | uppercase}}</h1>
  <h1>{{name | lowercase}}</h1>
  <h1>{{name | titlecase}}</h1>
  <h1>{{date | date:'dd.MM.yyy HH:mm:ss'}}</h1>
  `
})
export class AppComponent {
  work:string="";
  todos:string[] = ["Ali","Veli","Hasan"];
  search: string = "";
  name:string="Serkan";
  date: Date = new Date();
  num : number = 19999;
  save(){
    this.todos.push(this.work);
  }
}
