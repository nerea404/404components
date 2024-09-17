import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { CccAccordionModule } from '../../../_ccc-components/ccc-accordion/ccc-accordion.module';

@NgModule({
  declarations: [AccordionComponent],
  exports: [AccordionComponent],

  imports: [CommonModule,
    CccAccordionModule
  ],
})
export class AccordionModule {}
