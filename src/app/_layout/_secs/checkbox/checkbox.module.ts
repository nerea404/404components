import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { CccCheckboxGroupModule } from '../../../_ccc-components/ccc-checkbox-group/ccc-checkbox-group.module';



@NgModule({
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],

  imports: [
    CommonModule,
    CccCheckboxGroupModule
  ]
})
export class CheckboxModule { }
