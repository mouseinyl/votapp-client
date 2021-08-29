import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  createOptions(params?:{name:string,value:string}){
    let options = {
      params:new HttpParams(),
      headers:new HttpHeaders()
    }
    options.params = options.params.set('uid',localStorage.getItem("uid")+'')
    if(params != undefined){
      options.params= options.params.set(params.name,params.value)
    }
    return options
  }

  private getH(url,params?:{name:string,value:string}){
    const options=this.createOptions(params)
    console.log(this.api+url,options)
    return this.http.get(this.api+url,options);
  }

  private postH(url,body,params?:{name:string,value:string}){
    const options=this.createOptions(params)
    return this.http.post(this.api+url,body ?? {},options);
  }

 get(url:string,params?:{name:string,value:string}):Observable<any>{
   console.log(url,params)
   return this.getH(url,params)
 }

 post(url:string,body:any,params?):Observable<any>{
  return this.postH(url,body,params)
 }
}
