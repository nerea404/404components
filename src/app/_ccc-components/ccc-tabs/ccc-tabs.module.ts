import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccTabsComponent } from './ccc-tabs.component';
import { DxTabPanelModule } from 'devextreme-angular';

@NgModule({
  declarations: [CccTabsComponent],
  exports: [CccTabsComponent],

  imports: [CommonModule, DxTabPanelModule],
})
export class CccTabsModule {}
