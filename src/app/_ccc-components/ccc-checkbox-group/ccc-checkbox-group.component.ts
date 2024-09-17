import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ccc-checkbox-group',
  templateUrl: './ccc-checkbox-group.component.html',
  styleUrls: ['./ccc-checkbox-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CccCheckboxGroupComponent),
      multi: true,
    },
  ],
})
export class CccCheckboxGroupComponent {
  @Input() titulo: string = ''; // Título que se mostrará en el componente
  @Input() checkboxes: { label: string; checked: boolean }[] = []; // Lista de checkboxes con sus estados
  @Input() disabled: boolean = false; // Input para el estado deshabilitado
  @Output() valueChanged = new EventEmitter<{ index: number; checked: boolean }>(); // Evento para cambios de valor
  @Output('focus') focus = new EventEmitter<any>();
  @Output('blur') blur = new EventEmitter<any>();

  value: { label: string; checked: boolean }[] = [];

  onChange = (value: { label: string; checked: boolean }[]) => {};
  onTouched = () => {};

  writeValue(value: { label: string; checked: boolean }[]): void {
    this.value = value || [];
  }

  registerOnChange(fn: (value: { label: string; checked: boolean }[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Controla el estado de habilitación
  }

  handleValueChanged(event: any, index: number): void {
    this.value[index].checked = event.value;
    this.onChange(this.value);
    this.onTouched();
    this.valueChanged.emit({ index, checked: event.value });
  }
}
