import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { person } from '../datatypes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http:HttpClient) { }

  getPerson():Observable<person[]>{
    return this.http.get<person[]>('https://jsonplaceholder.typicode.com/users')
  }
  searchList(query:string){
    return this.http.get<person[]>(`https://jsonplaceholder.typicode.com/users?q=${query}`)
  }
  detailsPerson(id:string){
    return this.http.get<person>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
