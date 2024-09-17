import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid.component';
import { CccDatagridModule } from '../../../_ccc-components/ccc-datagrid/ccc-datagrid.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DataGridComponent],
  exports: [DataGridComponent],

  imports: [CommonModule,
    CccDatagridModule,
    HttpClientModule
  ],
})
export class DataGridModule {}
