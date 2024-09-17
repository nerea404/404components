import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ccc-radio-button-group',
  templateUrl: './ccc-radio-button-group.component.html',
  styleUrls: ['./ccc-radio-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CccRadioButtonGroupComponent),
      multi: true,
    },
  ],
})
export class CccRadioButtonGroupComponent {
  @Input() titulo: string = '';
  @Input() opciones: { text: string, value: any }[] = [];
  @Input() disabled: boolean = false;
  @Output() valueChanged = new EventEmitter<any>();
  @Output('focus') focus = new EventEmitter<any>();
  @Output('blur') blur = new EventEmitter<any>();

  selectedValue: any = null;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleValueChanged(event: any): void {
    this.selectedValue = event.value;
    this.onChange(this.selectedValue);
    this.onTouched();
    this.valueChanged.emit(this.selectedValue);
  }
}
