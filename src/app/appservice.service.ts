import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {url} from './api';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  private apiurl = url.api;
  private apiurl1= url.api+"5000/realTime/";
  private apiName=url.api+"5000/getquote/";
  constructor(private http: HttpClient) { }
   
   getTimeSeries(Stock:any){
    let url=this.apiurl+"5000/timeSeries/"+Stock+"/5min";
    return this.http.get(url);
   }
   getRealTime(Stock:any){
    let url1=this.apiurl1+Stock;
    return this.http.get(url1);
   }
   getCompanyName(Name:any){
    let url1=this.apiName+Name;
    return this.http.get(url1);
   }
}
