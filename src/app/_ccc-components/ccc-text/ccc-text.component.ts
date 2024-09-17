import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ccc-text',
  templateUrl: './ccc-text.component.html',
  styleUrl: './ccc-text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CccTextComponent),
      multi: true,
    },
  ],
})
export class CccTextComponent {
  @Input() titulo: string = ''; // Título que se mostrará en el componente
  @Input() valorInicial: string = ''; // Variable para el valor del TextBox
  @Input() botonBorrar: boolean = false;
  @Input() disabled: boolean = false; // Input para el estado deshabilitado

  @Output() valueChanged = new EventEmitter<string>(); // Evento para cambios de valor
  @Output('focus') focus = new EventEmitter<any>();
  @Output('blur') blur = new EventEmitter<any>();

  value: string = '';

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
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
