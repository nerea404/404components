import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccCheckboxGroupComponent } from './ccc-checkbox-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxCheckBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [CccCheckboxGroupComponent],
  exports: [CccCheckboxGroupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DxCheckBoxModule],
})
export class CccCheckboxGroupModule {}
