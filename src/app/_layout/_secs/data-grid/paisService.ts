import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'http://gestest.404demo.com/api/Pais';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: { 'Accept': 'text/plain' } });
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: { 'Accept': 'text/plain' } });
  }

  addPais(pais: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, pais, {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      }
    });
  }

  updatePais(id: number, pais: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pais, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      }
    });
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: { 'Accept': '*/*' } });
  }
}
