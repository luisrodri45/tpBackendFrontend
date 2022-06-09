import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {
  urlBase = "http://localhost:3000/api/transaccion";
  constructor(private _http:HttpClient) { }

  public getCodes(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com',
        'X-RapidAPI-Key': '5cdc033dc4msh7df58d30e42980ep129e2ajsn52e98bfb5a2d'
      }),
    }
    return this._http.get("https://currencyscoop.p.rapidapi.com/currencies", httpOptions);
  }
  public getConversion(have:string,want:string,amount:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
        'X-RapidAPI-Key': '5cdc033dc4msh7df58d30e42980ep129e2ajsn52e98bfb5a2d'
      }),
    }
    return this._http.get("https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have="+have+"&want="+want+"&amount="+amount, httpOptions);
  }
  public postTransacccion(transaccion:Transaccion){
    const httpOptions = {
      headers : new HttpHeaders({

      })
    }
    const body = {
      "monedaOrigen": transaccion.monedaOrigen,
      "cantidadOrigen": transaccion.cantidadOrigen,
      "monedaDestino": transaccion.monedaDestino,
      "cantidadDestino": transaccion.cantidadDestino,
      "emailCliente": transaccion.emailCliente,
      "tasaConversion": transaccion.tasaConversion
    }
    return this._http.post(this.urlBase,body,httpOptions);
  }

  public getTransacciones():Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({

      })
    }
    return this._http.get(this.urlBase,httpOptions);
  }

  public getTransaccionesOrigenDestino(origen:string,destino:string):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({

      })
    }
    return this._http.get(this.urlBase+"/"+origen+"/"+destino,httpOptions);
  }
}
