import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private urlBase="http://localhost:3000/api/libro";
  constructor(private _http:HttpClient) { }
  getLibros():Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({

      }),
      params : new HttpParams({

      })
    }
    return this._http.get(this.urlBase+"/destacados",httpOptions);
  }
  altaLibro(libro:Libro):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
    }
    const body ={
      "titulo": libro.titulo,
      "descripcion": libro.descripcion,
      "imagen": libro.imagen,
      "stock": libro.stock,
      "destacado": libro.destacado
    }
    return this._http.post(this.urlBase,body,httpOptions);
  }
}
