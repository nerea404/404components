import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridComponentComponent } from './datagrid-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CccDatagridModule } from '../../_ccc-components/ccc-datagrid/ccc-datagrid.module';
import { DxDataGridModule, DxDropDownButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [DatagridComponentComponent],
  exports: [DatagridComponentComponent],

  imports: [CommonModule,
    CccDatagridModule,
    HttpClientModule,
    DxDataGridModule,
    DxDropDownButtonModule

  ],
})
export class DatagridComponentModule {}
