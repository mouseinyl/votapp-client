import { Component, EventEmitter, Input, OnChanges, OnInit, Output,SimpleChanges, ViewChild } from '@angular/core';
import { tableRows } from 'src/app/model/interfaces/table-row';
import { action } from '../../model/interfaces/table-row';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-table',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,OnChanges  {
  public _e
  @ViewChild('table') table
  @Input() tableData= []
  @Input() tableConfig:tableRows [];
  @Input() titleTable:string = ''
  @Input() action?:action
  @Input() search = []

  @Output() crear:EventEmitter<any> =  new EventEmitter();
  public icon = PrimeIcons;

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes.tableData)
  }

  data(){
    return [...this.tableData]
  }
  crearAction(e){
    this.crear.emit(e)
  }

}
