import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  addForm:FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.createAddForm();
    this.addForm.controls["email"].setValue("serkancakmak@gmial.com")
  }
  

  createAddForm(){
    this.addForm = new FormGroup ({
      email:new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(10)])
    })
  }
  add(){
    if (this.addForm.valid){
      console.log(this.addForm.value),
      this.addForm.reset();
    }
    
  }
}
