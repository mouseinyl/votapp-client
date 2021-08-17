import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { ResultsComponent } from './results.component';
import { ComponentsModule } from '../../components/components.module';
import { DetailResulComponent } from './component/detail-resul/detail-resul.component';


@NgModule({
  declarations: [
    ReportsComponent,
    ResultsComponent,
    DetailResulComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    ComponentsModule
  ]
})
export class ResultsModule { }
