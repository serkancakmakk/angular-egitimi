import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor], // ng For'u import Etmeden Çalışmıyor
  template:`
  <h1>Döngüler</h1>
  <ul>
    <h3>
      ngfor ile
    </h3>
    <!-- Angular 17'den önce -->
    <li *ngFor="let data of todos">{{ data.work }}</li>
        <!-- @for Angular 17 ile geldi. -->
     <h3>
      for ile
     </h3>
    @for(data of todos; track data){
      <li>İndex : {{$index}} Veri :  {{data.work}} İlk mi : {{$first}} Son mu: {{$last}}</li>
    }
  </ul>
  `
})
// export class AppComponent {
//   todos:string[] = [
//     "Example 1",
//     "Example 2",
//     "Example 3",
//   ]
// }
export class AppComponent {
  todos:{work:string,isCompleted:boolean}[] = [
    {work:"Example 1",isCompleted:true,},
    {work:"Example 2",isCompleted:true,},
    {work:"Example 3",isCompleted:true,},
  ]
constructor(){
  this.save()
}
  save(){
    
    console.log('For Döngüsü')
    for(let i = 0;i <10;i++){
      console.log(i)
    }
    console.log('*********** Listeyi For İle Dönme **********')
    for(let i=0;i<this.todos.length;i++){
      console.log(this.todos[i].work);
    }
    console.log('*********** Listeyi For each İle Dönme **********')

    this.todos.forEach((val)=>{
      console.log(val.work);
      console.log(val.isCompleted);
    })
    console.log('*********** Listeyi For of İle Dönme **********')

    // of asenkron yapıları destekler
    // of todos içindeki bilgileri dataya atar
    for(let data of this.todos){
      console.log(data.work);
    }
    // in index olarak alır
    console.log('*********** Listeyi For in İle Dönme **********')

    for(let index in this.todos){
      console.log(this.todos[index].work);
    }
  }
}
