import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestServices } from 'src/app/services/request-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup
  constructor(private fb: FormBuilder, private  request:RequestServices, private Router: Router ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      usuario:['rmaaron12@gmail.com', [Validators.required]],
      password:['12345678', [Validators.required]]
    })
  }


  send(){
    this.request.post('auth/login',{...this.form.value}).subscribe((x)=>{
      if (x.data.uid){
        this.Router.navigate(['/administracion'])
      }
      console.log(x.data.uid)
     localStorage.setItem('uid',x.data.uid);
    }, (err)=>{

    })
  }

}
