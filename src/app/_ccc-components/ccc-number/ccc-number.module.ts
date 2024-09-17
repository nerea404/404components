import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccNumberComponent } from './ccc-number.component';
import { DxNumberBoxModule } from 'devextreme-angular';



@NgModule({
  declarations: [CccNumberComponent],
  exports: [CccNumberComponent],

  imports: [
    CommonModule,
    DxNumberBoxModule
  ]
})
export class CccNumberModule { }
