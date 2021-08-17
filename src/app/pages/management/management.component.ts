import { Component, OnInit } from '@angular/core';
import { action, tableRows } from '../../model/interfaces/table-row';

@Component({
  selector: 'app-management',
  template: '<router-outlet></router-outlet>',
})
export class ManagementComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
