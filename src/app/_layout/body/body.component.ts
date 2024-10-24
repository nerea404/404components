import { Component } from '@angular/core';
import { CheckboxComponent } from '../_secs/checkbox/checkbox.component';
import { FormsComponentsComponent } from '../forms-components/forms-components.component';
import { DatagridComponentComponent } from '../datagrid-component/datagrid-component.component';
import { TreeListComponent } from '../_secs/tree-list/tree-list.component';
import { DropdownSearchComponent } from '../_secs/dropdown-search/dropdown-search.component';
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
      title: 'Tree List',
      component: TreeListComponent, // Aquí especificamos el componente a renderizar
    },
    {
      title: 'Dropdown Search',
      component: DropdownSearchComponent, // Aquí especificamos el componente a renderizar
    },
    // {
    //   title: 'FileManager',
    //   component: FilemanagerComponent, // Aquí especificamos el componente a renderizar
    // },
  ];
}
