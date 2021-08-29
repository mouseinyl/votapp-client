import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotingRoutingModule } from './voting-routing.module';
import { VotingComponent } from './voting.component';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [
    VotingComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    VotingRoutingModule
  ]
})
export class VotingModule { }
