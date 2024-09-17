import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ccc-tag-box',
  templateUrl: './ccc-tag-box.component.html',
  styleUrls: ['./ccc-tag-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CccTagBoxComponent),
      multi: true,
    },
  ],
})
export class CccTagBoxComponent {
  @Input() titulo: string = ''; // Título que se mostrará en el componente
  @Input() valorInicial: any[] = []; // Valor inicial del TagBox
  @Input() botonBorrar: boolean = false; // Controla si se muestra el botón de borrar
  @Input() items: any[] = []; // Lista de elementos a mostrar en el TagBox
  @Input() ariaLabel: string = 'Etiqueta del TagBox'; // Etiqueta aria para accesibilidad
  @Input() disabled: boolean = false; // Input para el estado deshabilitado

  @Output() valueChanged = new EventEmitter<any[]>(); // Evento para cambios de valor

  value: any[] = [];

  onChange = (value: any[]) => {};
  onTouched = () => {};

  writeValue(value: any[]): void {
    this.value = value || [];
  }

  registerOnChange(fn: (value: any[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleValueChanged(event: any): void {
    this.value = event.value; // Actualiza el valor con el del evento
    this.onChange(event.value);
    this.onTouched();
    this.valueChanged.emit(event.value); // Emite el evento de cambio de valor
  }
}
