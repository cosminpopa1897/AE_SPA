import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private hostName = window.location.hostname;
  private apiUrl = `http://${this.hostName}:8000/`;
  constructor(
    private httpClient: HttpClient,
    ) { }
    
    getFromApi(relativeUrl:string){
      return this.httpClient.get(`${this.apiUrl}${relativeUrl}`);
    }
    
    getByIdFromApi(relativeUrl: string, id : number){
      return this.httpClient.get(`${this.apiUrl}${relativeUrl}${id}/`); 
    }
    
    postToApi(relativeUrl:string, data){
      return this.httpClient.post(`${this.apiUrl}${relativeUrl}`, data);
    }
    
    putToApi(relativeUrl:string, id: number, data){
      if(id == null)
      throw new Error("Put request need and existing and valid id");
      
      return this.httpClient.put(`${this.apiUrl}${relativeUrl}${id}/`, data);
    }
    
    deleteFromApi(relativeUrl: string, id: number) {
      return this.httpClient.delete(`${this.apiUrl}${relativeUrl}${id}/`); 
    }
}
