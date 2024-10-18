import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrl: './tree-list.component.scss'
})
export class TreeListComponent {
  menu: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/menu.json').subscribe((data: any) => {
      this.menu = data.Menu; 
    });
  }
}
