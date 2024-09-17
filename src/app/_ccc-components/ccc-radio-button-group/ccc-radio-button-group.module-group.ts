import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxCheckBoxModule, DxRadioGroupModule } from 'devextreme-angular';
import { CccRadioButtonGroupComponent } from './ccc-radio-button-group.component';

@NgModule({
  declarations: [CccRadioButtonGroupComponent],
  exports: [CccRadioButtonGroupComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DxRadioGroupModule,
    DxRadioGroupModule,
  ],
})
export class CccRadioButtonModule {}
