import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxSplitterModule, DxTemplateModule } from 'devextreme-angular';
import { CccSplitterComponent } from './ccc-splitter.component';  // Importa el componente
import { TablaClientesModule } from '../../cliente/tabla-clientes/tabla-clientes.module';

@NgModule({
  declarations: [
    CccSplitterComponent  // Declara el componente
  ],
  imports: [
    CommonModule, 
    DxSplitterModule, 
    DxTemplateModule,TablaClientesModule
  ],
  exports: [
    CccSplitterComponent  // Exporta el componente para que pueda ser usado en otros módulos
  ],
})
export class CccSplitterModule {}
