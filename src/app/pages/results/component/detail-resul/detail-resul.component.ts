import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-resul',
  templateUrl: './detail-resul.component.html',
  styleUrls: ['./detail-resul.component.scss']
})
export class DetailResulComponent implements OnInit {
  @Input() data:dataDetail
  @Input() display =  false
  constructor() { }

  ngOnInit(): void {
  }

  open(){
    this.display = true;
  }
  close(){
    this.display = false;

  }
}


export interface dataDetail {
  labels:string[],
  datos:number[],
  label:string,
  estado:string,
  cantida_votos:number,
  ganador:string

}
