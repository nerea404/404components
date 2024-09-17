import { Component } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
interface Tab {
  title: string;
  component?: any; // Puede ser refinado a Type<any> si es necesario
  content?: string;
}
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  tabs: Tab[] = [
    {
      title: 'Pestaña 1',
      component: CheckboxComponent // Aquí especificamos el componente a renderizar
    },
    {
      title: 'Pestaña 2',
      content: '<p>Este es contenido HTML simple en la segunda pestaña.</p>'
    },
    {
      title: 'Pestaña 3',
      content: '<p>Más contenido dinámico aquí.</p>'
    }
  ];
}
