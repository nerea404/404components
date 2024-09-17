import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CccTextModule } from '../../_ccc-components/ccc-text/ccc-text.module';
import { CccSelectBoxModule } from '../../_ccc-components/ccc-select-box/ccc-select-box.module';
import { CccCheckboxGroupModule } from '../../_ccc-components/ccc-checkbox-group/ccc-checkbox-group.module';
import { FormTextModule } from '../_secs/form-text/form-text.module';
import { SelectModule } from '../_secs/select/select.module';
import { CheckboxModule } from '../_secs/checkbox/checkbox.module';
import { RadioButtonModule } from '../_secs/radio-button/radio-button.module';
import { FormNumberModule } from '../_secs/form-number/form-number.module';
import { TagBoxModule } from '../_secs/tag-box/tag-box.module';
import { TabsModule } from '../_secs/tabs/tabs.module';
import { AccordionModule } from "../_secs/accordion/accordion.module";
import { DataGridModule } from "../_secs/data-grid/data-grid.module";



@NgModule({
  declarations: [BodyComponent],
  exports: [BodyComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CccTextModule,
    CccSelectBoxModule,
    CccCheckboxGroupModule,
    FormTextModule,
    SelectModule,
    CheckboxModule,
    RadioButtonModule,
    FormNumberModule,
    TagBoxModule,
    TabsModule,
    AccordionModule,
    DataGridModule
]
})
export class BodyModule { }
