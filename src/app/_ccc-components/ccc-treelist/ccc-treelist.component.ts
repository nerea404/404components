import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { DxTreeListComponent } from 'devextreme-angular';

interface BaseMenuItem {
  id: number;
  parentId?: number | null; // Opcional
  [key: string]: any; // Permite propiedades adicionales
}

interface ColumnDefinition {
  dataField: string;
  caption: string;
  width?: number;
  allowSorting?: boolean;
}

@Component({
  selector: 'app-ccc-treelist',
  templateUrl: './ccc-treelist.component.html',
  styleUrls: ['./ccc-treelist.component.scss'],
})
export class CccTreelistComponent implements OnChanges {
  @ViewChild(DxTreeListComponent, { static: false }) treeList!: DxTreeListComponent;
  @Input() menu: BaseMenuItem[] = [];
  @Input() columns: ColumnDefinition[] = [];
  @Input() showCheckboxes: boolean = false;

  options: any = {
    filterRow: false,
    headerFilter: false,
    selection: true,
    groupPanel: false,
    filtrosPersonalizados: false,
    colapsarFilas: false,
    columnResizing: false,
    columnReordering: false,
    dragAndDropEnabled: false,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['menu'] && changes['menu'].currentValue) {
      this.menu = this.flattenMenu(changes['menu'].currentValue);
      console.log('Updated menu in CccTreelistComponent:', this.menu);
      
      if (this.treeList) {
        this.treeList.instance.option('dataSource', this.menu);
      }
    }
  }

  applyMenuAction(action: string) {
    switch (action) {
      case 'Colapsar Filas':
        this.toggleCollapseRows();
        break;
      case 'Organizar Columnas':
        this.treeList.instance.showColumnChooser();
        break;
      case 'Filtros Personalizados':
        this.toggleCustomFilters();
        break;
      default:
        break;
    }
  }

  toggleCustomFilters() {
    this.options.filtrosPersonalizados = !this.options.filtrosPersonalizados;
    this.applyTreeListOptions();
  }

  toggleCollapseRows() {
    const visibleRows = this.treeList.instance.getVisibleRows();
    const areAllRowsCollapsed = visibleRows.every(row => !row.isExpanded);

    visibleRows.forEach(row => {
      if (areAllRowsCollapsed) {
        this.treeList.instance.expandRow(row.key);
      } else {
        this.treeList.instance.collapseRow(row.key);
      }
    });
  }

  applyTreeListOptions() {
    const treeListInstance = this.treeList.instance;
    treeListInstance.option({
      filterRow: { visible: this.options.filterRow },
      headerFilter: { visible: this.options.headerFilter },
      selection: { mode: this.options.selection ? 'multiple' : 'none' },
      allowColumnResizing: this.options.columnResizing,
      allowColumnReordering: this.options.columnReordering,
    });
  }

  flattenMenu(menu: BaseMenuItem[], parentId: number | null = null): BaseMenuItem[] {
    return menu.reduce((acc: BaseMenuItem[], item: BaseMenuItem) => {
      const newItem = { ...item, parentId };
      acc.push(newItem);
      if (item['items'] && item['items'].length) {
        acc = acc.concat(this.flattenMenu(item['items'], item.id));
      }
      return acc;
    }, []);
  }

  onRowClick(event: any): void {
    if (event.event.ctrlKey) {
      const rowKey = event.data.id;
      this.expandAllDescendants(rowKey);
    }
  }

  expandAllDescendants(rowKey: number): void {
    this.treeList.instance.expandRow(rowKey).then(() => {
      this.expandAllChildrenRecursively(rowKey);
    });
  }

  expandAllChildrenRecursively(parentKey: number): void {
    const node = this.treeList.instance.getNodeByKey(parentKey);

    if (node && node.children && node.children.length > 0) {
      node.children.forEach((childNode: any) => {
        this.treeList.instance.expandRow(childNode.key);
        this.expandAllChildrenRecursively(childNode.key);
      });
    }
  }

  onDragChange(event: any) {
    if (event.fromNode && event.toNode) {
      event.cancel = false;
    }
  }

  onReorder(event: any) {
    const { itemData, toNode, toIndex } = event;

    if (!this.menu) {
      console.error('Menu is undefined, cannot reorder.');
      return;
    }

    if (!itemData || !itemData.id) {
      console.error('itemData is invalid:', itemData);
      return;
    }

    const originalIndex = this.menu.findIndex(item => item.id === itemData.id);

    if (originalIndex === -1) {
      console.error('Item not found in menu:', itemData);
      return;
    }

    const item = this.menu[originalIndex];

    if (toNode) {
      item.parentId = toNode.key;

      if (!toNode['items']) {
        toNode['items'] = [];
      }

      toNode['items'].splice(toIndex, 0, item);
    } else {
      item.parentId = null;

      this.menu.splice(toIndex, 0, item);
    }

    this.treeList.instance.refresh();
  }

  toggleDragAndDrop() {
    this.options.dragAndDropEnabled = !this.options.dragAndDropEnabled;
    this.treeList.instance.option('rowDragging.enabled', this.options.dragAndDropEnabled);
  }
}
