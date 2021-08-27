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
  public tableConfig: tableRows[]
  public action: action = { delete: true }

  constructor(private RequestServices: RequestServices) { }

  ngOnInit(): void {


    this.tableConfig = [

      { field: 'name', header: 'Nombre' },
      { field: 'estado', header: 'Estado' },

    ]

    this.cars = [
      { name: "presidencias", estado: "activo", },
      { name: "colegiales", estado: "Inactiva", },
      { name: "distritales", estado: "En pausa", },
      { name: "presidencias", estado: "activo", },
      { name: "colegiales", estado: "Inactiva", },
      { name: "distritales", estado: "En pausa", },
      { name: "presidencias", estado: "activo", },
      { name: "colegiales", estado: "Inactiva", },
      { name: "distritales", estado: "En pausa", },
      { name: "presidencias", estado: "activo", },
      { name: "colegiales", estado: "Inactiva", },
      { name: "distritales", estado: "En pausa", },
    ]

  }

  getEvents(){
    this.RequestServices.get('/eventos').subscribe((x)=>{
      console.log(x)
    })
  }

}
