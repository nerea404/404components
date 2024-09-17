import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccSelectBoxModule } from '../../../_ccc-components/ccc-select-box/ccc-select-box.module';
import { SelectComponent } from './select.component';



@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],

  imports: [
    CommonModule,
    CccSelectBoxModule
  ]
})
export class SelectModule { }
