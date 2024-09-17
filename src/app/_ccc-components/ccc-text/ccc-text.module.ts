import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTextBoxModule } from 'devextreme-angular';
import { CccTextComponent } from './ccc-text.component';



@NgModule({
  declarations: [CccTextComponent],exports:[CccTextComponent],
  imports: [
    CommonModule,DxTextBoxModule 
  ]
})
export class CccTextModule { }
