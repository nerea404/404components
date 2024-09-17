import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { CccRadioButtonModule } from '../../../_ccc-components/ccc-radio-button-group/ccc-radio-button-group.module-group';



@NgModule({
  declarations: [RadioButtonComponent],
  exports: [RadioButtonComponent],

  imports: [
    CommonModule,
    CccRadioButtonModule
  ]
})
export class RadioButtonModule { }
