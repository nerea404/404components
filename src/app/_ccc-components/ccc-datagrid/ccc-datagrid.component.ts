import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-ccc-datagrid',
  templateUrl: './ccc-datagrid.component.html',
  styleUrls: ['./ccc-datagrid.component.scss'],
})
export class CccDatagridComponent {
  @Input() dataSource: any[] = [];
  @Input() keyExpr: string = 'id';
  @Input() showBorders: boolean = true;
  @Input() focusedRowEnabled: boolean = true;
  @Input() columns: any[] = [];

  @Input() allowAdding: boolean = false;
  @Input() allowUpdating: boolean = false;
  @Input() allowDeleting: boolean = false;

  @Output() focusedRowChanged = new EventEmitter<any>();
  @Output() saved = new EventEmitter<any>();

  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;

  focusedRowKey: any;

  constructor() {}

  ngOnInit() {}

  onFocusedRowChanged(e: any) {
    this.focusedRowKey = e.row.key;
    this.focusedRowChanged.emit(this.focusedRowKey);
  }

  createNewRow() {
    this.dataGrid.instance.addRow();
    this.dataGrid.instance.deselectAll();
  }

  editFocusedRow() {
    if (this.focusedRowKey != null) {
      const rowIndex = this.dataGrid.instance.getRowIndexByKey(
        this.focusedRowKey
      );
      this.dataGrid.instance.editRow(rowIndex);
      this.dataGrid.instance.deselectAll();
    } else {
      alert('Please select a row to edit.');
    }
  }

  deleteFocusedRow() {
    if (this.focusedRowKey != null) {
      const rowIndex = this.dataGrid.instance.getRowIndexByKey(
        this.focusedRowKey
      );
      this.dataGrid.instance.deleteRow(rowIndex);
      this.dataGrid.instance.deselectAll();
    } else {
      alert('Please select a row to delete.');
    }
  }

  duplicateFocusedRow() {
    if (this.focusedRowKey != null) {
      const focusedRowIndex = this.dataGrid.instance.getRowIndexByKey(
        this.focusedRowKey
      );
      const focusedRowData =
        this.dataGrid.instance.getVisibleRows()[focusedRowIndex].data;

      if (focusedRowData) {
        const duplicatedRowData = {
          ...focusedRowData,
          id: this.generateNewId(),
        };
        this.dataSource.push(duplicatedRowData);
        this.dataGrid.instance.refresh(); 
        this.dataGrid.instance.deselectAll();
      } else {
        alert('No se pudo duplicar la fila enfocada.');
      }
    } else {
      alert('Por favor, selecciona una fila para duplicar.');
    }
  }

  generateNewId() {
    return Math.max(...this.dataSource.map((item) => item.id)) + 1;
  }

  // Función para exportar a Excel o PDF
  // exportTo(format: string) {
  //   if (format === 'excel') {
  //     this.exportToExcel();
  //   } else if (format === 'pdf') {
  //     this.exportToPDF();
  //   }
  // }

  // // Función para exportar a Excel
  // exportToExcel() {
  //   const workbook = new ExcelJS.Workbook();
  //   const worksheet = workbook.addWorksheet('Sheet 1');

  //   exportDataGrid({
  //     component: this.dataGrid.instance,
  //     worksheet: worksheet,
  //     autoFilterEnabled: true
  //   }).then(() => {
  //     workbook.xlsx.writeBuffer().then((buffer: BlobPart) => {
  //       const blob = new Blob([buffer], { type: 'application/octet-stream' });
  //       saveAs(blob, 'tabla-exportada.xlsx');
  //     });
  //   });
  // }

  // // Función para exportar a PDF
  // exportToPDF() {
  //   const doc = new jsPDF();

  //   doc.text('Data Grid Export', 14, 16);

  //   const columns = this.columns.map(col => ({ title: col.caption, dataKey: col.dataField }));
  //   const rows = this.dataSource.map(item => {
  //     const row: any = {};
  //     this.columns.forEach(col => {
  //       row[col.dataField] = item[col.dataField];
  //     });
  //     return row;
  //   });

  //   doc.autoTable({
  //     head: [columns],
  //     body: rows,
  //     startY: 20,
  //   });

  //   doc.save('tabla-exportada.pdf');
  // }

  onSaved($event: Event) {
    throw new Error('Method not implemented.');
  }
}
