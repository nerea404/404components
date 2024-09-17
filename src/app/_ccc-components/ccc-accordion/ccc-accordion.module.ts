import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxAccordionModule } from 'devextreme-angular';
import { CccAccordionComponent } from './ccc-accordion.component';
import { RadioButtonModule } from '../../_layout/_secs/radio-button/radio-button.module';

@NgModule({
  declarations: [CccAccordionComponent],
  exports: [CccAccordionComponent],
  imports: [
    CommonModule,
    DxAccordionModule,
    RadioButtonModule
  ]
})
export class CccAccordionModule { }
