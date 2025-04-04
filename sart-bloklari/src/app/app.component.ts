import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:`
  <h1>Şart Blokları</h1>
<!-- 
  Angular 17 ile değişmiş
  <p *ngIf ="firstWord" style="color:red;">Birinci Yazı</p>
  <p *ngIf ="firstWord" style="color:green;">İkinci Yazı</p>
   -->
@if(firstWord){
  <p style="color:red;">Birinci Yazı</p>
  <p style="color:{{firstWord === true ? 'red': ''}}">Birinci Yazı {{firstWord === true ? 'red': ''}}</p>
}
@if(secondWord){
  <p style="color:green;">İkinci Yazı</p>
}
<hr>
  <button (click)="show(1)">Birinci Yazıyı Göster</button>
  <button (click)="show(2)"> ikinci Yazıyı Göster</button>
  <button (click)="show(3)"> Tümü Yazıyı Göster</button>

  `
})
export class AppComponent {
  firstWord:boolean=false;
  secondWord:boolean=false;

  show(num:number){
    if(num===1){
      this.firstWord=true;
      this.secondWord=false;
    }else if(num==2){
      this.firstWord=false;
      this.secondWord=true;
    }
    else{
      this.firstWord=true;
      this.secondWord=true;
    }
    switch(num){
      case 1:
        this.firstWord=true;
        this.secondWord=false;
        break;
      case 2:
        this.firstWord=false;
        this.secondWord=true;
    }
  }
}
