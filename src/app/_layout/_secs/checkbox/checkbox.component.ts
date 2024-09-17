import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  formData = {
    opciones1: [ // Opciones para el grupo de checkboxes
      { label: 'Opción 1', checked: true, indeterminate: false },
      { label: 'Opción 2', checked: false, indeterminate: false },
      { label: 'Opción 3', checked: false, indeterminate: true },
    ],
    opciones2: [ // Opciones para el grupo de checkboxes
      { label: 'Opción 4', checked: true, indeterminate: false },
      { label: 'Opción 5', checked: false, indeterminate: false },
      { label: 'Opción 6', checked: false, indeterminate: false },
    ],
    opciones3: [ // Opciones para el grupo de checkboxes
      { label: 'Opción 7', checked: false, indeterminate: false },
      { label: 'Opción 8', checked: false, indeterminate: true },
      { label: 'Opción 9', checked: true, indeterminate: false },
    ],
  };


  // Maneja cambios en el componente de checkbox group
  onCheckboxValueChanged1(event: { index: number; checked: boolean }): void {
    console.log(`Checkbox en posición ${event.index} cambiado a: ${event.checked}`);
    this.formData.opciones1[event.index].checked = event.checked;
    this.formData.opciones1[event.index].indeterminate = false; // Resetea el estado indeterminado
  }

  onCheckboxValueChanged2(event: { index: number; checked: boolean }): void {
    console.log(`Checkbox en posición ${event.index} cambiado a: ${event.checked}`);
    this.formData.opciones2[event.index].checked = event.checked;
    this.formData.opciones2[event.index].indeterminate = false; // Resetea el estado indeterminado
  }

  onCheckboxValueChanged3(event: { index: number; checked: boolean }): void {
    console.log(`Checkbox en posición ${event.index} cambiado a: ${event.checked}`);
    this.formData.opciones3[event.index].checked = event.checked;
    this.formData.opciones3[event.index].indeterminate = false; // Resetea el estado indeterminado
  }
}
