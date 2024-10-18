import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeListComponent } from './tree-list.component';
import { CccTreelistModule } from "../../../_ccc-components/ccc-treelist/ccc-treelist.module";



@NgModule({
  declarations: [TreeListComponent],
  exports: [TreeListComponent],
  imports: [
    CommonModule,
    CccTreelistModule,
]
})
export class TreeListModule { }
