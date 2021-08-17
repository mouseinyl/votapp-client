import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public menuItems = []

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        name:'Administración',
        icon:'pi pi-th-large',
        router:'/administracion'
      },
      {
        name:'Resultados',
        icon:'pi pi-file-o',
        router:'/resultados'
      }
    ]
  }

}
