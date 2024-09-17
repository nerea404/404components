import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  formData = {
    productoSeleccionado: 'holi', // Valor inicial para el select box
  };

  productos1 = ['Producto1 1', 'Producto1 2', 'Producto1 3']; // Lista de productos para el select box
  productos2 = ['Producto2 1', 'Producto2 2', 'Producto2 3']; // Lista de productos para el select box
  productos3 = ['Producto3 1', 'Producto3 2', 'Producto3 3']; // Lista de productos para el select box

  // Maneja cambios en el componente de select box
  onSelectValueChanged1(value: any): void {
    console.log('Producto seleccionado:', value);
    this.formData.productoSeleccionado = value;
  }

  onSelectValueChanged2(value: any): void {
    console.log('Producto seleccionado:', value);
    this.formData.productoSeleccionado = value;
  }

  onSelectValueChanged3(value: any): void {
    console.log('Producto seleccionado:', value);
    this.formData.productoSeleccionado = value;
  }
}
