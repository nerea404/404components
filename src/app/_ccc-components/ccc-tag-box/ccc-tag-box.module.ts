import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccTagBoxComponent } from './ccc-tag-box.component';
import { DxTagBoxModule } from 'devextreme-angular';



@NgModule({
  declarations: [CccTagBoxComponent],
  exports: [CccTagBoxComponent],
  imports: [
    CommonModule,
    DxTagBoxModule
  ]
})
export class CccTagBoxModule { }
