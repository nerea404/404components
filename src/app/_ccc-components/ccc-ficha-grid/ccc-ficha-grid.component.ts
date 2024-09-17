import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ccc-ficha-grid',
  templateUrl: './ccc-ficha-grid.component.html',
  styleUrl: './ccc-ficha-grid.component.scss'
})
export class CccFichaGridComponent {
  @Input() title: string = ''; 

}
