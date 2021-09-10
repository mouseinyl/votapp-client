import { Component, OnInit } from '@angular/core';
import { tableRows, action } from '../../../../model/interfaces/table-row';
import { RequestServices } from '../../../../services/request-services.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public cars: any[] = []
  public tableConfig: tableRows[] = [
    { field: 'name', header: 'Nombre' },
    { field: 'estado', header: 'Estado' },
    { field: 'candidatos', header: '#candidatos' },
    { field: 'votantes', header: '#Votantes' },

  ]
  public action: action = {ver:{estado:true,route:'/administracion/evento'},create:false }

  constructor(private RequestServices: RequestServices) { }

  ngOnInit(): void { this.getEvents() }

  getEvents(){
    this.RequestServices.get('eventos').subscribe((x)=>{
      x.data.map(z=>{
        this.cars.push({
          name:z.nombre,
          estado:z.estado,
          candidatos:z.candidatos.length,
          votantes:z.votantes.length
        })
      })
    })
  }

}
