import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonedaService {
  private apiUrl = 'http://gestest.404demo.com/api/Moneda';

  constructor(private http: HttpClient) {}

  // GET all Monedas
  getMonedas(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {
      headers: { Accept: 'text/plain' },
    });
  }

  // POST new Moneda
  addMoneda(moneda: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, moneda, {
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json',
      },
    });
  }
  getMonedaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: { 'Accept': 'text/plain' } });
  }
  
}
