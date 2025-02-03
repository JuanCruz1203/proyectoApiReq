import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountryservService {

  constructor(private http:HttpClient) { }

  readonly apiUrl="https://restcountries.com/v3.1/name/"

  public getCountry(name:string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}${name}`);
  }

}
