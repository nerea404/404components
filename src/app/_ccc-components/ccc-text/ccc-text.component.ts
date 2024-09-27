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
  styleUrls: ['./ccc-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CccTextComponent),
      multi: true,
    },
  ],
})
export class CccTextComponent {
  @Input() titulo: string = '';
  @Input() valorInicial: string = '';
  @Input() botonBorrar: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  @Output() valueChanged = new EventEmitter<string>();
  @Output('focus') focus = new EventEmitter<any>();
  @Output('blur') blur = new EventEmitter<any>();

  value: string = '';
  error: string = '';

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || this.valorInicial;
    this.validate();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleValueChanged(event: any): void {
    this.value = event.value;
    this.onChange(event.value);
    this.onTouched();
    this.validate();
    this.valueChanged.emit(event.value);
  }

  validate(): void {
    if (this.required && !this.value.trim()) {
      this.error = 'Este campo es obligatorio';
    } else {
      this.error = '';
    }
  }
}
