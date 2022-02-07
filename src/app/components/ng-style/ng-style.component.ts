import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo.... esta es una etiqueta 
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5" style="margin-right: 10px">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-danger" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano:number = 10;

  // Primera manera de usar ngStyle ---  [ngStyle]=" {'font-size': tamano + 'px' }
  // Seguna manera ---- <p [style.fontSize.px]="tamano">

  constructor() { }

  ngOnInit(): void {
  }

}
