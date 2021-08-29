import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public menuItems = []
  public clearPage = true

  constructor(private router:Router) {
    this.formatPage();
  }


  formatPage(){
    this.router.events.subscribe((x)=>{
      if ( x instanceof NavigationEnd){
        console.log(x.url)
        this.clearPage =['/auth', '/voting'].includes(x.url);
      }
    })
  }

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
