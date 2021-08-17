import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() labels:string[] = [];
  @Input() datos:number[] =[];

  private color = [
    '#4CAF50',
    '#FBC02D',
    '#0288D1',
    '#6c757d',
    '#9C27B0'
  ]
  data: any

  chartOptions: any

  constructor() { }

  ngOnInit(): void {
    this.data  =  {
      labels: [...this.labels],
      datasets: [
          {
              data: [...this.datos],
              backgroundColor: [
                 ...this.color
              ],
              hoverBackgroundColor: [
                ...this.color

              ]
          }
      ]
    };
    this.chartOptions  = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      }
    }
  }



}
