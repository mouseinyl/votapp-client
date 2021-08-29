import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ChartComponent } from './chart/chart.component';
import { ChartModule } from 'primeng/chart';

import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {StepsModule} from 'primeng/steps';
const componet = [TableComponent,ChartComponent]
const modules = [
  InputTextModule,
  MenuModule,
  TableModule,
  ButtonModule,
  CardModule,
  CalendarModule,
  DynamicDialogModule,
  ToolbarModule,
  DialogModule,
  FileUploadModule,
  ChartModule,
  ProgressSpinnerModule,
  StepsModule
]

@NgModule({
  declarations: [
    ...componet,
    ChartComponent
  ],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules,
    ...componet
  ]
})
export class ComponentsModule { }
