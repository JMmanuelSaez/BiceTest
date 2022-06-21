import { Injectable } from '@angular/core';
import { Dolar } from '../models/dolar.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url = 'https://www.indecon.space/values/dolar';

@Injectable({
  providedIn: 'root'
})
export class DolaresService {

  constructor(private httpClient: HttpClient) { }
  obtenerDolar(): Observable<Dolar[]>
  {
    return this.httpClient.get<Dolar[]>(url);
  }
}
