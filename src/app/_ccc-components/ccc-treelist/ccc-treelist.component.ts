import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { DxTreeListComponent } from 'devextreme-angular';

@Component({
  selector: 'app-ccc-treelist',
  templateUrl: './ccc-treelist.component.html',
  styleUrls: ['./ccc-treelist.component.scss'],
})
export class CccTreelistComponent implements OnChanges {
  @ViewChild(DxTreeListComponent, { static: false }) treeList!: DxTreeListComponent;
  @Input() menu: any[] = [];

  options: any = {
    filterRow: false,
    headerFilter: false,
    selection: false,
    groupPanel: false,
    filtrosPersonalizados: false,
    colapsarFilas: false,
    columnResizing: false,
    columnReordering: false,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['menu'] && changes['menu'].currentValue && this.treeList) {
      this.menu = this.flattenMenu(changes['menu'].currentValue);
      this.treeList.instance.option('dataSource', this.menu);
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

  flattenMenu(menu: any[], parentId: number | null = null): any[] {
    return menu.reduce((acc: any[], item: any) => {
      const newItem = { ...item, parentId };
      acc.push(newItem);
      if (item.items && item.items.length) {
        acc = acc.concat(this.flattenMenu(item.items, item.id));
      }
      return acc;
    }, []);
  }

  onRowClick(event: any): void {
    if (event.event.ctrlKey) { 
      const rowKey = event.data.id;
      this.expandAllDescendants(rowKey); // Expand all descendants on first click
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
        this.expandAllChildrenRecursively(childNode.key); // Continue expanding recursively
      });
    }
  }
}
