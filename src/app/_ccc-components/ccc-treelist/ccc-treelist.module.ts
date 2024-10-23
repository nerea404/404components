import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccTreelistComponent } from './ccc-treelist.component';
import { DxCheckBoxModule, DxDropDownBoxModule, DxDropDownButtonModule, DxMenuModule, DxSelectBoxModule, DxTreeListModule, DxTreeViewModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { CccCheckboxGroupModule } from '../ccc-checkbox-group/ccc-checkbox-group.module';
import { DxoMasterDetailModule } from 'devextreme-angular/ui/nested'; // Asegúrate de importar este módulo

@NgModule({
  declarations: [CccTreelistComponent],
  exports: [CccTreelistComponent],
  imports: [
    CommonModule,
    DxTreeListModule,
    DxoMasterDetailModule,
    HttpClientModule,
    DxSelectBoxModule,
    DxDropDownButtonModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxMenuModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    CccCheckboxGroupModule,
    DxCheckBoxModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CccTreelistModule { }
