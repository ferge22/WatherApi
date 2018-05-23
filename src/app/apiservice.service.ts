import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  geturl(apikey, miestas){
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q='+miestas+'&units=metric&cnt=16&appid='+apikey;
    return this.http.get(url);
  }
}
