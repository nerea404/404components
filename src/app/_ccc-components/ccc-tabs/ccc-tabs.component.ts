import { Component, Input, Type } from '@angular/core';

interface Tab {
  title: string;
  component?: Type<any>; // Componente a renderizar
  content?: string; // Contenido HTML a mostrar
}
@Component({
  selector: 'app-ccc-tabs',
  templateUrl: './ccc-tabs.component.html',
  styleUrl: './ccc-tabs.component.scss'
})
export class CccTabsComponent {
  @Input() tabs: Tab[] = [];

  ngOnInit() {
    // Puedes agregar lógica adicional aquí si es necesario
  }
}
