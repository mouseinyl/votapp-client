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
  votacion
  ngOnInit(): void {

    this.votacion =  this.route.snapshot.parent.params.votacion

    this.form = this.fb.group({
      id:['', [Validators.required]],

    })
  }


  next(){
    if(this.form.valid){
     const body = {
      votante:this.form.value.id,
      votacion:this.votacion
     }
      this.request.post("voting/validuser",body).subscribe((x)=>{
        console.log(x)
        if(x.estado){
          localStorage.setItem("e",this.form.value.id);
          this.Router.navigate(['/voting/'+this.votacion+'/vota']);
        }else {
          console.log(x.menssage)
        }
      })

    }

  }


}
