import { Injectable } from '@angular/core';
import { Compra } from './compra';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/compras';
  
  getCompras(): Observable<Compra[]>{
    return this.http.get<Compra[]>(this.url);
  }
  getCompraById(id: number): Observable<Compra> {
    return this.http.get<Compra>(`${this.url}/${id}`);
  }
  delete(compra:Compra): Observable<void> {
    return this.http.delete<void>(`${this.url}/${compra.id}`);
  }
  update(compra:Compra): Observable<Compra>{
    return this.http.put<Compra>(`${this.url}/${compra.id}`,compra);
  }
  save(compra:Compra): Observable<Compra>{
    return this.http.post<Compra>(this.url, compra);
  }
}
