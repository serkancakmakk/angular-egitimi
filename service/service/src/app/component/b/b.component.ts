import { Component, inject } from '@angular/core';
import { ExampleService } from '../../service/example.service';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {


  ex = inject(ExampleService);

// constructor(
//   public ex:ExampleService
// ){}
}
