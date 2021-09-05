import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'



@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}


  swaMessage(title, message , icon){
   return Swal.fire({
      title:title,
      html:message,
      icon:icon,
      confirmButtonColor:"#4CAF50"
    })

  }
  info( message){
    return this.swaMessage('Info', message,'info')
   }

  success(title, message){
   return this.swaMessage(title, message,'success')
  }

  error(title, message){
    return this.swaMessage(title, message,'error')
   }
}


