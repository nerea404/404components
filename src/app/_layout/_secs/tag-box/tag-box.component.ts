import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-box',
  templateUrl: './tag-box.component.html',
  styleUrl: './tag-box.component.scss'
})
export class TagBoxComponent {
  formData = {
    productosSeleccionados: ["hola"] // Valor inicial para el TagBox
  };

  productos1 = [
    { id: 1, text: 'Producto1 1' },
    { id: 2, text: 'Producto1 2' },
    { id: 3, text: 'Producto1 3' }
  ];

  productos2 = [
    { id: 4, text: 'Producto2 1' },
    { id: 5, text: 'Producto2 2' },
    { id: 6, text: 'Producto2 3' }
  ];

  productos3 = [
    { id: 7, text: 'Producto3 1' },
    { id: 8, text: 'Producto3 2' },
    { id: 9, text: 'Producto3 3' }
  ];

  onTagBoxValueChanged1(selectedValues: any[]): void {
    console.log('Productos seleccionados 1:', selectedValues);
    this.formData.productosSeleccionados = selectedValues;
  }

  onTagBoxValueChanged2(selectedValues: any[]): void {
    console.log('Productos seleccionados 2:', selectedValues);
    this.formData.productosSeleccionados = selectedValues;
  }

  onTagBoxValueChanged3(selectedValues: any[]): void {
    console.log('Productos seleccionados 3:', selectedValues);
    this.formData.productosSeleccionados = selectedValues;
  }}
