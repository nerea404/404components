import { Component } from '@angular/core';

@Component({
  selector: 'app-form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.scss'],
})
export class FormNumberComponent {
  formData = {
    numero: 0, // Valor inicial para el componente de número
  };
  
  onNumberValueChanged(value: number): void {
    console.log('Número cambiado:', value);
    this.formData.numero = value;
  }
}
