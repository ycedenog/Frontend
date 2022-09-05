import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  enlace = "http://localhost:3000/libros";

  constructor(private http:HttpClient) { }

  obtenerLibros():Observable<any>{
    return this.http.get<any>(this.enlace);
  }

  obtenerLibroAutor(nombre:string, apellido:string):Observable<any>{
    return this.http.get<any>(`${this.enlace}/${nombre}/${apellido}`);
  }

  obtenerLibroEditorial(editorial:string):Observable<any>{
    return this.http.get<any>(`${this.enlace}/s/d/${editorial}`);
  }

  registrarLibro(titulo:string, ISBN:string, genero:string, anio:string, precio:string, autor:string, editorial:string):Observable<any>{
    return this.http.post<any>(`${this.enlace}/nuevo`, {
      titulo: titulo,
      ISBN: ISBN,
      genero: genero,
      anio_publicacion: anio,
      precio: precio,
      autor: autor,
      editorial: editorial
    })
  }
}
