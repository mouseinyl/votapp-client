import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {
  items = [
    {
      nombre:"luis",
      apellido:"garcias",
      partido:"pld"
    },
    {
      nombre:"manuel",
      apellido:"gutieres",
      partido:"prd"
    },
    {
      nombre:"maria",
      apellido:"acosta",
      partido:"ccs"
    },
    {
      nombre:"roberto",
      apellido:"pascual",
      partido:"pqdrc"
    }

  ]
  constructor(private Router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  next(){
    this.Router.navigate(['/voting/'+this.route.snapshot.params.votacion +'/confirma']);

  }
}
