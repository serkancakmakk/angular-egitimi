import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private route:Router
  ){}
  about(){
    this.route.navigate(["about"]) // this.route.navigate(["about","sadsad"])
    this.route.navigateByUrl("/about") // this.route.navigateByUrl("/about/56544/5544")
}
}
