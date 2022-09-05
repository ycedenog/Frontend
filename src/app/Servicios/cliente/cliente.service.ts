import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  enlace = "http://localhost:3000/clientes";

  constructor(private http:HttpClient) { }

  obtenerClientesServer():Observable<any>{
    return this.http.get<any>(this.enlace);
  }

  obtenerClientesconPrestamo(id:string):Observable<any>{
    return this.http.get<any>(`${this.enlace}/prestamos/${id}`);
  }
}
