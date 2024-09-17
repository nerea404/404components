import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { CccTabsModule } from "../../../_ccc-components/ccc-tabs/ccc-tabs.module";

@NgModule({
  declarations: [TabsComponent],
  exports: [TabsComponent],
  imports: [CommonModule, CccTabsModule],
})
export class TabsModule {}
