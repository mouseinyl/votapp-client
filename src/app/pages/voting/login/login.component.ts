import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestServices } from '../../../services/request-services.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup
  constructor(private fb: FormBuilder, private  request:RequestServices, private Router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id:['', [Validators.required]],

    })
  }


  next(){
    this.Router.navigate(['/voting/'+this.route.snapshot.params.votacion +'/vota']);
    // this.request.post('auth/login',{...this.form.value}).subscribe((x)=>{


    //   if (x.data.uid != undefined){
    //     this.Router.navigate(['/administracion'])
    //     localStorage.setItem('uid',x.data.uid);
    //   }else{
    //   }

    // }, (err)=>{

    // })
  }


}
