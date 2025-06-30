import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicioPruebaTecnicaService {

  private urlBase = 'https://localhost:7040/api';

  constructor(private http: HttpClient) { }

  getGif(): Observable<any> {
    return this.http.get(`${this.urlBase}/home/gif-fact-nuevo`);
  }

  getGifFactExistente(query : string): Observable<any> {
    console.log("entra");
    return this.http.get(`${this.urlBase}/home/gif-fact-existente?fact=${query}`);
  }

  getHistorial(): Observable<any> {
    return this.http.get(`${this.urlBase}/home/historial`);
  }
}
