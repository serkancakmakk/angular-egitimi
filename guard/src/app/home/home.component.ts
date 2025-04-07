import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name:string = "";
constructor(
  private router:Router 
){}

checkStatus(){}
logout(){
  localStorage.removeItem("token")
  this.router.navigateByUrl("login")
}
}
