import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = "http://localhost:8000/";
  constructor(
    private httpClient: HttpClient,
  ) { }

  getFromApi(relativeUrl:string){
    return this.httpClient.get(`${this.apiUrl}${relativeUrl}`);
  }
}
