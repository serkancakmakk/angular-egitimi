import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private _http:HttpClient
  ){}
  getApi(){
    this._http.get("https://jsonplaceholder.typicode.com/posts").subscribe(res=>{
      console.log(res)
    })
  }
}
