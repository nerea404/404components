import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNumberComponent } from './form-number.component';
import { CccNumberModule } from '../../../_ccc-components/ccc-number/ccc-number.module';



@NgModule({
  declarations: [FormNumberComponent],
  exports: [FormNumberComponent],

  imports: [
    CommonModule,
    CccNumberModule
  ]
})
export class FormNumberModule { }
