import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-api';
  constructor(private _http:HttpClient){
    // this._http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(response => {
    //   console.log(response)
    // } )
    this._http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: (res:any)=>{
        console.log(res);
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err)
      }
    })
  }
}
