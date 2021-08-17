import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: '', component: ResultsComponent,
    children: [
      { path: '', component: ReportsComponent },
      { path: '**', pathMatch: 'full', redirectTo: '' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
