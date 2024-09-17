import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ccc-boton',
  templateUrl:'./ccc-boton.component.html',
   styleUrl: './ccc-boton.component.scss'

})
export class CccBotonComponent {
  @Input() nombre: string = '';
  @Input() icono: string = '';
  @Input() onClick: () => void = () => {};
  @Input() disabled: boolean = false;

  onClickButton() {
    if (!this.disabled) {
      this.onClick();
    }
  }
}