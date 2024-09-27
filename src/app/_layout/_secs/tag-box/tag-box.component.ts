import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-box',
  templateUrl: './tag-box.component.html',
  styleUrls: ['./tag-box.component.scss']
})
export class TagBoxComponent {
  // Especifica el tipo de los valores seleccionados
  productosSeleccionadosFilled: number[] = [8]; // Valor inicial para el TagBox filled
  productosSeleccionadosFocused: number[] = []; // Valor inicial para el TagBox focused
  productosSeleccionadosEmpty: number[] = []; // Valor inicial para el TagBox focused


  productos1 = [
    { id: 1, text: 'Pro' },
    { id: 2, text: 'Duct' },
    { id: 3, text: 'Ucto' }
  ];

  productos2 = [
    { id: 4, text: 'Term' },
    { id: 5, text: 'Var' },
    { id: 6, text: 'Per' }
  ];

  productos3 = [
    { id: 7, text: 'Pepe' },
    { id: 8, text: 'Ana' },
    { id: 9, text: 'Lara' }
  ];

  // Declara el tipo para el parámetro de la función
  onTagBoxValueChangedEmpty(selectedValues: number[]): void {
    console.log('Productos seleccionados Empty:', selectedValues);
    this.productosSeleccionadosEmpty = selectedValues;
  }
  onTagBoxValueChangedFilled(selectedValues: number[]): void {
    console.log('Productos seleccionados filled:', selectedValues);
    this.productosSeleccionadosFilled = selectedValues;
  }

  onTagBoxValueChangedFocused(selectedValues: number[]): void {
    console.log('Productos seleccionados focused:', selectedValues);
    this.productosSeleccionadosFocused = selectedValues;
  }

  onTagBoxValueChangedDisabled(selectedValues: number[]): void {
    console.log('Productos seleccionados disabled:', selectedValues);
  }
}
