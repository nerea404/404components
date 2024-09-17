import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  formData = {
    opciones1: [
      { text: 'Opción 1', value: '1' },
      { text: 'Opción 2', value: '2' },
    ],
   
    opciones3: [
      { text: 'Opción 7', value: '7' },
      { text: 'Opción 8', value: '8' },
    ],
  };
  

  selectedValue1: string = 'a'; 
  selectedValue2: string = 'b'; 
  selectedValue3: string = 'c';

  onRadioValueChanged1(value: string): void {
    console.log(`Radio button seleccionado en el grupo 1: ${value}`);
    this.selectedValue1 = value;
  }

  onRadioValueChanged2(value: string): void {
    console.log(`Radio button seleccionado en el grupo 2: ${value}`);
    this.selectedValue2 = value;
  }

  onRadioValueChanged3(value: string): void {
    console.log(`Radio button seleccionado en el grupo 3 (disabled): ${value}`);
    this.selectedValue3 = value;
  }
}
