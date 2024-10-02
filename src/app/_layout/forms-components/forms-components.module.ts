import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponentsComponent } from './forms-components.component';
import { CccCheckboxGroupModule } from '../../_ccc-components/ccc-checkbox-group/ccc-checkbox-group.module';
import { CccSelectBoxModule } from '../../_ccc-components/ccc-select-box/ccc-select-box.module';
import { CccTextModule } from '../../_ccc-components/ccc-text/ccc-text.module';
import { AppRoutingModule } from '../../app-routing.module';
import { AccordionModule } from '../_secs/accordion/accordion.module';
import { CheckboxModule } from '../_secs/checkbox/checkbox.module';
import { DataGridModule } from '../_secs/data-grid/data-grid.module';
import { FormNumberModule } from '../_secs/form-number/form-number.module';
import { FormTextModule } from '../_secs/form-text/form-text.module';
import { RadioButtonModule } from '../_secs/radio-button/radio-button.module';
import { SelectModule } from '../_secs/select/select.module';
import { TabsModule } from '../_secs/tabs/tabs.module';
import { TagBoxModule } from '../_secs/tag-box/tag-box.module';

@NgModule({
  declarations: [FormsComponentsComponent],
  exports: [FormsComponentsComponent],

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
    DataGridModule,
    TabsModule
  ],
})
export class FormsComponentsModule {}
