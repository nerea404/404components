import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid.component';
import { CccDatagridModule } from '../../../_ccc-components/ccc-datagrid/ccc-datagrid.module';
import { HttpClientModule } from '@angular/common/http';
import { CccTreelistModule } from "../../../_ccc-components/ccc-treelist/ccc-treelist.module";

@NgModule({
  declarations: [DataGridComponent],
  exports: [DataGridComponent],

  imports: [CommonModule,
    CccDatagridModule,
    HttpClientModule, CccTreelistModule],
})
export class DataGridModule {}
