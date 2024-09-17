import { Component } from '@angular/core';

@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrl: './form-text.component.scss',
})
export class FormTextComponent {
  formData = {
    nombre: '', // Valor inicial para el componente de texto
  };
  
  onTextValueChanged(value: string): void {
    console.log('Texto cambiado:', value);
    this.formData.nombre = value;
  }

  
}
