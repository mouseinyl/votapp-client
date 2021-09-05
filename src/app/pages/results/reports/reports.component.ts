import { Component, OnInit } from '@angular/core';
import { dataDetail } from '../component/detail-resul/detail-resul.component';
import { RequestServices } from 'src/app/services/request-services.service';
import { resultResponse, RESULT } from '../../../model/interfaces/result.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public resultados :any[] = []

  constructor(private request: RequestServices) { }

  ngOnInit(): void {
    this.getResult()
    this.resultados = []
  }

  // {
  //   cantida_votos: 10,
  //   datos: [1, 2, 3, 45],
  //   estado: 'trascurso',
  //   ganador: 'luis',
  //   label: 'votos',
  //   labels: ['luis', 'manuel', 'julio', 'antonio'],
  // },

  // pedir datos de api
  getResult(){
    this.request.get('resultados').subscribe((x:resultResponse)=>{
      // colocar valores en objet
      x.data.forEach(resul =>{
        this.resultados.push(
          {
            cantida_votos:resul.votos_realizado,
            label:resul.evento.nombre + " \n " + resul.evento.ref,
            labels:resul.evento.candidatos.map((c)=> `${c.nombre} ${c.apellido}` ),
            datos:resul.evento.candidatos.map((c)=> c.votos != undefined  ? c.votos : 0 ),
            estado:resul.estado,
          }
        )
      })

    })
  }



}

