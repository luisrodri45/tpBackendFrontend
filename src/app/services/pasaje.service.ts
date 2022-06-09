import { HttpClient, HttpHeaders } from '@angular/common/http';
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

      })
    }
    return this._http.get(this.urlBase,httpOptions);
  }
  //Borrar pasajes
  deletePasaje(id:number){
    
  }
  //Filtrar pasajes por categoria
  getPasajesCategoria(categoria:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.get(this.urlBase+categoria,httpOptions);
  }
  //Agregar pasaje
  addPasaje(pasaje:Pasaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    const body = {
      "precioPasaje":"",
      "categoriaPasajero":"a",
      "fechaCompra":"02/02/2022",
      "pasajero":{
        "_id": "6296d9a2e499a88bbc72dd8d"
       }
    }
    return this._http.post(this.urlBase,body,httpOptions);
  }
  //Modificar pasaje
  updatePasaje(pasaje:Pasaje){
    
  }
}
