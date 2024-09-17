import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdiomaService {
  private apiUrl = 'http://gestest.404demo.com/api/Idioma';

  constructor(private http: HttpClient) {}

  // GET all Idiomas
  getIdiomas(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {
      headers: { Accept: 'text/plain' },
    });
  }

  // POST new Idioma
  addIdioma(idioma: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, idioma, {
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json',
      },
    });
  }
  getIdiomaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: { 'Accept': 'text/plain' } });
  }
  
}
