import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Fii } from '../models/Fii';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  backendUrl:string = "http://localhost:3333"


  constructor(private http:HttpClient) { }

  getSomeFunds():Observable<Fii[]>{
    return this.http.get<Fii[]>(`${this.backendUrl}/fewfunds`,);
  }
}
