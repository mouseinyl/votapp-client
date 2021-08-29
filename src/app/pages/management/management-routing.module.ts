import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
import { EventsComponent } from './pages/events/events.component';
import { CreateEventsComponent } from './pages/create-events/create-events.component';

const routes: Routes = [
  {path:"", component:ManagementComponent,
  children:[
    { path: 'eventos', component: EventsComponent},
    { path: 'crear-evento', component:CreateEventsComponent},
    { path: 'evento/:name', component:CreateEventsComponent},
    { path: '', pathMatch: 'full', redirectTo: 'eventos' },
    {path:"**",redirectTo:""}

  ]
  },
  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
