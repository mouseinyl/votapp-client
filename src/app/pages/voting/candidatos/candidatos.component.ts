import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestServices } from 'src/app/services/request-services.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {
  items :any[]
  public votacion
  constructor(private Router: Router,
    private route: ActivatedRoute ,
    private  request:RequestServices,
    ) { }

    ngOnInit(): void {
      this.votacion =  this.route.snapshot.parent.params.votacion
      this.init()
  }
  init(){

    this.request.get('voting',{name:'votacion',value:this.votacion}).subscribe((x)=>{
      this.items = x.candidatos
    })

  }

  voto(e){
    let body = {
      candidato:e,
      votante:localStorage.getItem("e"),
      votacion:this.votacion
    }
    this.request.post("voting/voto",body).subscribe((x)=>{

      if(x.data.estado){
      console.log(x)
        this.next()
      }else{
        console.log(x)
      }
    })
  }
  next(){
    this.Router.navigate(['/voting/'+this.votacion +'/confirma']);

  }
}
