import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  urlBase = "http://localhost:3000/api/pasaje/";
  constructor(private _http:HttpClient) { }
  //Obtener pasajes
  getPasajes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params : new HttpParams({

      })
    }
    return this._http.get(this.urlBase,httpOptions);
  }
  //Borrar pasajes
  deletePasaje(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params : new HttpParams({

      })
    }
    return this._http.delete(this.urlBase+id,httpOptions);
  }
  //Filtrar pasajes por categoria
  getPasajesCategoria(categoria:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params : new HttpParams({

      })
    }
    return this._http.get(this.urlBase+categoria,httpOptions);
  }
  //Agregar pasaje
  addPasaje(pasaje:Pasaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params : new HttpParams({

      })
    }
    const body = {
      "precioPasaje": pasaje.precioPasaje.toString(),
      "precioTotal": pasaje.precioTotal.toString(),
      "categoriaPasajero":pasaje.categoriaPasajero,
      "fechaCompra":pasaje.fechaCompra.toDateString(),
      "pasajero":{
        "_id": pasaje.pasajero
       }
    }
    return this._http.post(this.urlBase,body,httpOptions);
  }
  //Modificar pasaje
  updatePasaje(pasaje:Pasaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params : new HttpParams({

      })
    }
    const body = {
      "_id": pasaje._id,
      "precioPasaje": pasaje.precioPasaje,
      "precioTotal": pasaje.precioTotal.toString(),
      "categoriaPasajero":pasaje.categoriaPasajero,
      "fechaCompra":pasaje.fechaCompra,
      "pasajero":{
        "_id": pasaje.pasajero
       }
    }
    return this._http.put(this.urlBase+pasaje._id,body,httpOptions);
  }

  //Cargar un pasaje
  getPasaje(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params : new HttpParams({

      })
    }
    return this._http.get(this.urlBase+"editar"+"/"+id,httpOptions);
  }
}
