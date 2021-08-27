import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:AuthComponent, children:[
    {path:'',component:LoginComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:LoginComponent},
    {path:'**',pathMatch:'full', redirectTo:''}
  ]},
  {path:'**',pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
