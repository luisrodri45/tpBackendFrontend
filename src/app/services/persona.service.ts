import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  urlBase = "http://localhost:3000/api/persona/";
  constructor(private _http:HttpClient) { }

  getPersonas():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }
    return this._http.get(this.urlBase,httpOptions);
  }
}
