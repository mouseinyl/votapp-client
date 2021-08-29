import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotingComponent } from './voting.component';

import { LoginComponent } from './login/login.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';

const routes: Routes = [
  {
    path: ':votacion', component: VotingComponent,
    children: [
      { path: 'inicia', component: LoginComponent },
      { path: 'vota', component: CandidatosComponent },
      { path: 'confirma', component: ConfirmarComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'inicia' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingRoutingModule { }
