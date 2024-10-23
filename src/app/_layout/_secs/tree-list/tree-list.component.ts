import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface MenuItem {
  id: number;
  nombre: string;
  items?: MenuItem[];
}

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss'],
})
export class TreeListComponent {
  menu: MenuItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/menu.json').subscribe(
      (data: any) => {
        this.menu = data.Menu; 
        console.log('Menu loaded:', this.menu);
      },
      (error) => {
        console.error('Error loading menu:', error);
      }
    );
  }
}
