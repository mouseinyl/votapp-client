import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { RequestServices } from 'src/app/services/request-services.service';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {
  public votacion
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private request: RequestServices,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.votacion = this.route.snapshot.parent.params.votacion
    this.alert.success(" Gracias  ", "Por participar en este evento").then((x)=>{
      if(x.isConfirmed){
        this.router.navigate(['/voting/' + this.votacion])
      }
    })
  }

}
