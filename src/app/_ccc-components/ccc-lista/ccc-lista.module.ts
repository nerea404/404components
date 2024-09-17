import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccListaComponent } from './ccc-lista.component';
import { TablaClientesModule } from '../../cliente/tabla-clientes/tabla-clientes.module';
import { DonutChartClienteModule } from '../../cliente/donut-chart-cliente/donut-chart-cliente.module';
import { CccSplitterModule } from '../ccc-splitter/ccc-splitter.module';



@NgModule({
  declarations: [CccListaComponent],exports: [CccListaComponent],
  imports: [
    CommonModule,CccSplitterModule,TablaClientesModule,DonutChartClienteModule
  ]
})
export class CccListaModule { }
