import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting',
  template: `
  <div class="card">
    <p-steps [model]="items" [readonly]="true"></p-steps>
  </div>

  <router-outlet></router-outlet>
  `
})
export class VotingComponent implements OnInit {

  public items = [{
    label: 'Inicio',
    routerLink: 'inicia'
  },
  {
    label: 'Vota',
    routerLink: 'vota'
  },
  {
    label: 'Listo',
    routerLink: 'confirma'
  },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
