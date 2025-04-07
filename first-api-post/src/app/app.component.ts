import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    
  `
})
export class AppComponent {
  

  // Define headers in the save method
  


  constructor(
    private _app:AppService
  ) {
    _app.get((res)=>{
      console.log(res);
    })
  }
  save(){
    this._app.add({userId:1,title:"Deneme",completed:false,id:0},(res)=>{
      console.log(res);
    })
  }
}


// constructor(
  //   private _http:HttpClient
  // ){
  //   // let model ={
  //   //   userId:1,
  //   //   id:0,
  //   //   title:"Deneme22",
  //   //   completed:false,
  //   // }
  //   // // this._http.post('https://jsonplaceholder.typicode.com/todos/',{
  //   // //   userId:1,
  //   // //   id:0,
  //   // //   title:"Deneme2",
  //   // //   completed:false,
  //   // // })
  //   // this._http.post('https://jsonplaceholder.typicode.com/todos/',model
  //   //   )
  //   // .subscribe({
  //   // next:(res:any)=>{
  //   //     console.log(res);
  //   //   },
  //   //   error:(err:HttpErrorResponse)=>{
  //   //     console.log(err);
  //   //   }
  //   // })
  // }