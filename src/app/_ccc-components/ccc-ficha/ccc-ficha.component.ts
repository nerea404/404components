import { Component, Input, OnInit } from '@angular/core';
import { RegistroComponente } from '../../../_decorators/registro-componente.decorator';
import { DonutChartService } from '../../cliente/donut-chart-cliente/donut-chart-service';
import { TabsService } from '../../tabs/tabs.service';

@Component({
  selector: 'app-ccc-ficha',
  templateUrl: './ccc-ficha.component.html',
  styleUrl: './ccc-ficha.component.scss',
})
@RegistroComponente('CccFichaComponent')
export class CccFichaComponent implements OnInit {
  @Input() title: string = '';
  constructor(
    private tabsService: TabsService,
    private donutChartService: DonutChartService
  ) {}
  ngOnInit(): void {
    console.log('Titulo', this.title);
  }
  cerrarTab() {
    this.tabsService.closeActiveTab();
  }
  abrirCliente(event: any) {

    this.tabsService.triggerOpenTab(
      'Nuevo Cliente',
      'FichaClienteComponent',
      event.data,
      true
    );
  }
}
