import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { ManagementComponent } from './management.component';
import { EventsComponent } from './pages/events/events.component';
import { CreateEventsComponent } from './pages/create-events/create-events.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './components/create-user/create-user.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ManagementComponent, EventsComponent, CreateEventsComponent, CreateUserComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ManagementModule { }
