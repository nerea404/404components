import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ccc-dropdown-search',
  templateUrl: './ccc-dropdown-search.component.html',
  styleUrls: ['./ccc-dropdown-search.component.scss']
})
export class CccDropdownSearchComponent implements OnInit {
  gridBoxValue: number | null = null; 
  gridDataSource: any[] = []; 
  filteredDataSource: any[] = [];
  isDropDownOpened: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadData(); 
  }

  loadData() {
    this.http.get<any[]>('/assets/clientes.json').subscribe(
      (data) => {
        this.gridDataSource = data;
        this.filteredDataSource = data; 
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }

  goToX() {
    window.open('https://js.devexpress.com/Angular/Demos/WidgetsGallery/Demo/TreeList/UsingSearchPanel/MaterialBlueLight/', '_blank');
  }

  onRowClick(event: any) {
    this.gridBoxValue = event.data.ID;  
    this.isDropDownOpened = false;
  }

  filterClientes(query: string): void {
    if (query) {
      this.filteredDataSource = this.gridDataSource.filter(cliente =>
        cliente.nombreFiscal.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredDataSource = this.gridDataSource; 
    }
  }
}
