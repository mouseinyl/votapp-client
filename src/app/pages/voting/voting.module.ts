import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotingRoutingModule } from './voting-routing.module';
import { VotingComponent } from './voting.component';

import { ComponentsModule } from '../../components/components.module';
import { LoginComponent } from './login/login.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VotingComponent,

    LoginComponent,
    CandidatosComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    VotingRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VotingModule { }
