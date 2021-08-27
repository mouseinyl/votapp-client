import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServices {

  public header = new HttpHeaders
  public api = 'http://localhost:3000/'
  constructor(private http: HttpClient) {
    this.header.set("uid",localStorage.getItem("uid"))
  }

  createBase(verd:string, path:string,body?):Observable<any>{
    return this.http[verd](this.api + path,body ?? {},{headers:this.header});
  }

 get(url:string):Observable<any>{
   return this.createBase('get',url)
 }

 post(url:string,body:any):Observable<any>{
  return this.createBase('post',url,body);
 }
}
