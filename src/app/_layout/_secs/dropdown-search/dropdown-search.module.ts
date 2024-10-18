import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSearchComponent } from './dropdown-search.component';
import { CccDropdownSearchModule } from "../../../_ccc-components/ccc-dropdown-search/ccc-dropdown-search.module";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [DropdownSearchComponent],
  exports: [DropdownSearchComponent],

  imports: [
    CommonModule,
    CccDropdownSearchModule,
    HttpClientModule
]
})
export class DropdownSearchModule { }
