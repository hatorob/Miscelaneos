import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef ) { 
    console.log("directiva llamada...")
    /* el.nativeElement.style.backgroundColor = "yellow"; */
  }

  @Input("appResaltado") nuevoColor:any;

  @HostListener('mouseenter') mouseEntro() {
    console.log(this.nuevoColor);
    /* this.el.nativeElement.style.backgroundColor = "yellow"; */
    this.resaltar( this.nuevoColor || "yellow" )
  }
  @HostListener('mouseleave') mouseSalio() {
    /* this.el.nativeElement.style.backgroundColor = null; */
    this.resaltar(null);
  }

  private resaltar( color:any ) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
