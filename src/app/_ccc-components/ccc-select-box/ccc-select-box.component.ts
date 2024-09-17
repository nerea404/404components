import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ccc-select-box',
  templateUrl: './ccc-select-box.component.html',
  styleUrls: ['./ccc-select-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CccSelectBoxComponent),
      multi: true,
    },
  ],
})
export class CccSelectBoxComponent {
  @Input() titulo: string = ''; // Título que se mostrará en el componente
  @Input() valorInicial: string = ''; // Valor inicial del SelectBox
  @Input() botonBorrar: boolean = false; // Controla si se muestra el botón de borrar
  @Input() items: any[] = []; // Lista de elementos a mostrar en el SelectBox
  @Input() ariaLabel: string = 'Simple Product'; // Etiqueta aria para accesibilidad
  @Input() disabled: boolean = false; // Input para el estado deshabilitado

  @Output() valueChanged = new EventEmitter<any>(); // Evento para cambios de valor
  @Output('focus') focus = new EventEmitter<any>();
  @Output('blur') blur = new EventEmitter<any>();

  value: any = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Controla el estado de habilitación
  }

  handleValueChanged(event: any): void {
    this.value = event.value; // Actualiza el valor con el del evento
    this.onChange(event.value);
    this.onTouched();
    this.valueChanged.emit(event.value); // Emite el evento de cambio de valor
  }
}
