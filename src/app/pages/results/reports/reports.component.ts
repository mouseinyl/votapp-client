import { Component, OnInit } from '@angular/core';
import { dataDetail } from '../component/detail-resul/detail-resul.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public resultados:dataDetail[] = []

  constructor() { }

  ngOnInit(): void {
    this.resultados = [
      {
        cantida_votos: 10,
        datos:[1,2,3,45],
        estado:'trascurso',
        ganador:'luis',
        label:'votos',
        labels:['luis','manuel', 'julio','antonio'],},
        {
          cantida_votos: 10,
          datos:[1,2,3,45],
          estado:'trascurso',
          ganador:'luis',
          label:'votos',
          labels:['luis','manuel', 'julio','antonio'],},
          {
            cantida_votos: 10,
            datos:[1,2,3,45],
            estado:'trascurso',
            ganador:'luis',
            label:'votos',
            labels:['luis','manuel', 'julio','antonio'],}
    ]
  }

}
