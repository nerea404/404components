import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTextComponent } from './form-text.component';
import { CccTextModule } from '../../../_ccc-components/ccc-text/ccc-text.module';



@NgModule({
  declarations: [FormTextComponent],
  exports: [FormTextComponent],

  imports: [
    CommonModule,
    CccTextModule
  ]
})
export class FormTextModule { }
