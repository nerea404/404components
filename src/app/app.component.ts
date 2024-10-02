import { Component } from '@angular/core';
import { locale, loadMessages } from 'devextreme/localization';
import esMessages from 'devextreme/localization/messages/es.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '404components';

  ngOnInit(): void {
    loadMessages(esMessages);
    locale('es');
  }
}
