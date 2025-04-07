import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {
  apiUrl: string = "https://jsonplaceholder.typicode.com/"
  constructor(
    private _http: HttpClient,
    private _err: ErrorService
  ) { }


  get(api: string, callBack: (res: any) => void) {
    let headers:any = {
      headers:{
        "authorization":localStorage.getItem("token")
      }
    }
    this._http.get(this.apiUrl + api).subscribe({
      next: (res) => {
        callBack(res);
      },
      error: (err: HttpErrorResponse) => {

      }
    })
  }


  post(api:string,model:any,callBack:(res:any)=>void) { 
    this._http.post(this.apiUrl,{}).subscribe({
      next:(res)=>{
        callBack(res);
      },
      error:(err:HttpErrorResponse)=>{
        this._err.errorHandler(err);
      }
    })
  }
}
