import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxSelectBoxModule, DxTextBoxModule, DxTemplateModule } from 'devextreme-angular';
import { CccSelectBoxComponent } from './ccc-select-box.component';



@NgModule({
  declarations: [CccSelectBoxComponent],exports:[CccSelectBoxComponent],
  imports: [
    CommonModule,DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
  ]
})
export class CccSelectBoxModule { }
