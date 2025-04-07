// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { RenklendirDirective } from './renklendir.directive';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,RenklendirDirective],
//   template:`
//   <h1 renklendir="green" test="serkan">directive</h1>
//   `

// })
// export class AppComponent {
//   title = 'directive';
// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RenklendirDirective } from './renklendir.directive';
import { ValidateDirective } from './validate.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RenklendirDirective,ValidateDirective],
  template:`
  <h1>directive</h1>
  <form>
    <input id="name" type="text" validate required minlength="3">
    <div></div>
    <button type="submit">Send</button>
  </form>
  `

})
export class AppComponent {
  
}
