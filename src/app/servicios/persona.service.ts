import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { }

  getAllPersonas(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/api/serviV1/personas/');
  }

  addPersonas(persona: any): Observable<any> {
    let json = JSON.stringify(persona);

    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this.httpClient.post('http://127.0.0.1:8000/api/serviV1/personas/', json, {headers: headers});
  }

  delPersonas(identificador): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/api/serviV1/personas/' + identificador);
  }
}
