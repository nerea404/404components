import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagBoxComponent } from './tag-box.component';
import { CccTagBoxModule } from '../../../_ccc-components/ccc-tag-box/ccc-tag-box.module';



@NgModule({
  declarations: [TagBoxComponent],
  exports: [TagBoxComponent],
  imports: [
    CommonModule,
    CccTagBoxModule
  ]
})
export class TagBoxModule { }
