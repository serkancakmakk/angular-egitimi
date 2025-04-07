import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validate]'
})
export class ValidateDirective {

  constructor(
    private el: ElementRef
  ) { }
  @HostListener("keyup") keyup(){
    this.checkInputValidation(this.el.nativeElement)
}
checkInputValidation(element:any){
  console.log(element.validity.valid);
  const valid = element.validity.valid;
  const id = element.id;
  const divEl = document.querySelector(`#${id} + div `);
  if(!valid){
    element.className = "invalid",
    divEl!.innerHTML = element.validationMessage
  }else{
    element.className=""
    divEl!.innerHTML = ""
  }
}
}
