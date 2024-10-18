import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccDropdownSearchComponent } from './ccc-dropdown-search.component';
import { DxCheckBoxModule, DxDataGridModule, DxDropDownBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { DataGridModule } from '../../_layout/_secs/data-grid/data-grid.module';

@NgModule({
  declarations: [CccDropdownSearchComponent],
  exports: [CccDropdownSearchComponent],
  imports: [CommonModule,DxDropDownBoxModule,DxDataGridModule,DxCheckBoxModule,DxTextBoxModule],
})
export class CccDropdownSearchModule {}
