// ccc-datagrid.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccDatagridComponent } from './ccc-datagrid.component';
import {
  DxDataGridModule,
  DxDropDownBoxModule,
  DxDropDownButtonModule,
  DxMenuModule,
  DxSelectBoxModule,
  DxTreeViewModule,
} from 'devextreme-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { CccCheckboxGroupModule } from "../ccc-checkbox-group/ccc-checkbox-group.module";
@NgModule({
  declarations: [CccDatagridComponent],

  imports: [
    CommonModule,
    DxDataGridModule,
    DxDropDownButtonModule,
    DxSelectBoxModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxMenuModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    CccCheckboxGroupModule
],
  exports: [CccDatagridComponent],
})
export class CccDatagridModule {}
