// ccc-datagrid.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccDatagridComponent } from './ccc-datagrid.component';
import { DxDataGridModule } from 'devextreme-angular'; 

@NgModule({
  declarations: [CccDatagridComponent], 
  imports: [
    CommonModule,
    DxDataGridModule
  ],
  exports: [CccDatagridComponent] 
})
export class CccDatagridModule {}
