import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ccc-number',
  templateUrl: './ccc-number.component.html',
  styleUrls: ['./ccc-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CccNumberComponent),
      multi: true,
    },
  ],
})
export class CccNumberComponent {
  @Input() titulo: string = ''; // Título que se mostrará en el componente
  @Input() valorInicial: number = 0; // Valor inicial para el NumberBox
  @Input() botonBorrar: boolean = false;
  @Input() disabled: boolean = false; // Input para el estado deshabilitado

  @Output() valueChanged = new EventEmitter<number>(); // Evento para cambios de valor
  @Output('focus') focus = new EventEmitter<any>();
  @Output('blur') blur = new EventEmitter<any>();

  value: number = 0;

  onChange = (value: number) => {};
  onTouched = () => {};

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: (value: number) => void): void {
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
