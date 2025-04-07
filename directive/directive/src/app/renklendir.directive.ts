import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]'
})
export class RenklendirDirective {
  //@Input("renklendir") color:string | undefined;
  //@Input("test") name:string | undefined;
  constructor(private el : ElementRef) { }
  @HostListener("mouseenter") method1() {
    this.el.nativeElement.style="color:red"
    //this.el.nativeElement.innerHTML=this.name;
   // console.log(this.color);
    //console.log(this.name);
  }
  @HostListener("mouseleave") method2() {
    console.log('Mouse Elementin Üzerinden ayrıldı');
    this.el.nativeElement.style="color:black"
  }
}
