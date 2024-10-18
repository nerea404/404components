import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccTreelistComponent } from './ccc-treelist.component';
import { DxDropDownBoxModule, DxDropDownButtonModule, DxMenuModule, DxSelectBoxModule, DxTreeListModule, DxTreeViewModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { CccCheckboxGroupModule } from '../ccc-checkbox-group/ccc-checkbox-group.module';



@NgModule({
  declarations: [CccTreelistComponent],
  exports: [CccTreelistComponent],
  imports: [
    CommonModule,
    DxTreeListModule,
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
    CccCheckboxGroupModule
  ]
})
export class CccTreelistModule { }
