import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ClienteService } from './clientes.service';
import { HttpClient } from '@angular/common/http';
import { DxDataGridComponent } from 'devextreme-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IdiomaService } from '../_secs/data-grid/idiomaService';
import { MonedaService } from '../_secs/data-grid/monedaService';
import { PaisService } from '../_secs/data-grid/paisService';
type ColumnChooserMode = 'dragAndDrop' | 'select';


@Component({
  selector: 'app-datagrid-component',
  templateUrl: './datagrid-component.component.html',
  styleUrl: './datagrid-component.component.scss'
})
export class DatagridComponentComponent {
  paises: any[] = [];
  idiomas: any[] = [];
  monedas: any[] = [];
  clientes: any[] = []; // Para almacenar los clientes
  form: FormGroup | undefined;
  columns: any[] = []; // Columnas del DataGrid

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService
  ) {
    this.form = this.fb.group({ prueba: [null] });
  }

  ngOnInit(): void {
    this.loadClientes(); // Cargar clientes al inicializar
  }

  // Método para cargar los clientes
  loadClientes(): void {
    this.clienteService.getClientes().subscribe(
      (data) => {
        this.clientes = data; // Asignar los datos a clientes
      },
      (error) => {
        console.error('Error al cargar los clientes:', error);
      }
    );
  }


  onFocusedRowChanged(event: any) {
    console.log('Fila enfocada cambiada:', event);
  }

  onSaved(event: any) {
    console.log('Cambios guardados:', event);
  }

  submitForm() {
    console.log('Form:', this.form?.value);
  }
}