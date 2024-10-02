import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

interface Options {
  filterRow: boolean;
  headerFilter: boolean;
  columnChooser: boolean;
  groupPanel: boolean;
  exportPanel: boolean;
  rowDragging: any;
  selection: boolean;
  filtrosPersonalizados: boolean;
  colapsarFilas: boolean;
  sorting: boolean;
  editing: boolean;
  columnResizing: boolean;
  columnReordering: boolean;
  wordWrap: boolean;
  rowAlternation: boolean;
  showBorders: boolean;
}

@Component({
  selector: 'app-ccc-datagrid',
  templateUrl: './ccc-datagrid.component.html',
  styleUrls: ['./ccc-datagrid.component.scss'],
})
export class CccDatagridComponent {
  options: Options = {
    filterRow: false,
    headerFilter: false,
    columnChooser: false,
    groupPanel: false,
    exportPanel: false,
    rowDragging: { allowReordering: false, showDragIcons: false },
    selection: false,
    filtrosPersonalizados: false,
    colapsarFilas: false,
    sorting: false,
    editing: false,
    columnResizing: false,   
    columnReordering: false,
    wordWrap: false,
    rowAlternation: true,
    showBorders: true,
  };

  @Input() dataSource: any[] = [];
  @Input() keyExpr: string = 'id';
  @Input() columns: any[] = [];

  @Input() allowAdding: boolean = false;
  @Input() allowUpdating: boolean = false;
  @Input() allowDeleting: boolean = false;

  @Output() focusedRowChanged = new EventEmitter<any>();
  @Output() saved = new EventEmitter<any>();

  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;

  focusedRowKey: any = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  applyMenuAction(selectedItem: string) {
    switch (selectedItem) {
      case 'Selector Fila':
        this.options.selection = !this.options.selection;
        break;
      case 'Filtro Fila':
        this.options.filterRow = !this.options.filterRow;
        break;
      case 'Filtro Cabecera':
        this.options.headerFilter = !this.options.headerFilter;
        break;
      case 'Agrupar Por':
        this.options.groupPanel = !this.options.groupPanel;
        break;
      case 'Colapsar Filas':
        this.toggleCollapseRows();
        break;
      case 'Organizar Columnas':
        this.options.columnReordering = !this.options.columnReordering;
        this.options.columnResizing = !this.options.columnResizing; 
        break;
      case 'Filtros Personalizados':
        this.options.filtrosPersonalizados = !this.options.filtrosPersonalizados;
        break;
      default:
        break;
    }
    this.applyGridOptions();
    this.cdr.detectChanges(); 
  }

  toggleCollapseRows() {
    const visibleRows = this.dataGrid.instance.getVisibleRows();
    const isAnyRowExpanded = visibleRows.some(row => row.rowType === 'data' && row.isExpanded);

    if (isAnyRowExpanded) {
      this.collapseAllRows(visibleRows);
    } else {
      this.expandAllRows(visibleRows);
    }
    console.log('Filas colapsadas o expandidas según estado actual');
  }

  collapseAllRows(visibleRows: any[]) {
    visibleRows.forEach(row => {
      if (row.isExpanded) {
        this.dataGrid.instance.collapseRow(row.key);
      }
    });
  }

  expandAllRows(visibleRows: any[]) {
    visibleRows.forEach(row => {
      this.dataGrid.instance.expandRow(row.key);
    });
  }

  applyGridOptions() {
    const dataGridInstance = this.dataGrid.instance;

    dataGridInstance.option('filterRow', { visible: this.options.filterRow });
    dataGridInstance.option('headerFilter', { visible: this.options.headerFilter });
    dataGridInstance.option('columnChooser', { enabled: this.options.columnChooser });
    dataGridInstance.option('groupPanel', { visible: this.options.groupPanel });
    dataGridInstance.option('rowDragging', { allowReordering: this.options.rowDragging.allowReordering });
    dataGridInstance.option('selection', { mode: this.options.selection ? 'multiple' : 'none' });
    dataGridInstance.option('sorting', { mode: this.options.sorting ? 'multiple' : 'none' });
    dataGridInstance.option('columnAutoWidth', this.options.columnResizing);
    dataGridInstance.option('allowColumnReordering', this.options.columnReordering);  
    dataGridInstance.option('allowColumnResizing', this.options.columnResizing);    
    dataGridInstance.option('wordWrapEnabled', this.options.wordWrap);
    dataGridInstance.option('rowAlternationEnabled', this.options.rowAlternation);
    dataGridInstance.option('showBorders', this.options.showBorders);
    dataGridInstance.option('filterPanel', { visible: this.options.filtrosPersonalizados });
  }
}
