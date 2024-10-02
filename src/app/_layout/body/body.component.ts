import { Component } from '@angular/core';
import { CheckboxComponent } from '../_secs/checkbox/checkbox.component';
import { FormsComponentsComponent } from '../forms-components/forms-components.component';
import { DatagridComponentComponent } from '../datagrid-component/datagrid-component.component';
interface TabComponents {
  title: string;
  component?: any; // Puede ser refinado a Type<any> si es necesario
  content?: string;
}
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  tabs: TabComponents[] = [
    {
      title: 'Datagrid',
      component: DatagridComponentComponent,
    },
    {
      title: 'Form Components',
      component: FormsComponentsComponent, // Aquí especificamos el componente a renderizar
    },
    {
      title: 'Pestaña 3',
      content: '<p>Más contenido dinámico aquí.</p>',
    },
  ];
}
