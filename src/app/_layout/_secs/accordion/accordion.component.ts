import { Component } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  accordionSections = [
    {
      title: 'Sección 1',
      component: CheckboxComponent // Aquí especificamos el componente a renderizar
    },
  ];
}
