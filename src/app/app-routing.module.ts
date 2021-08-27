import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', children: [
      { path: 'administracion', loadChildren: () => import('./pages/management/management.module').then(m => m.ManagementModule) },
      { path: 'resultados', loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsModule) },
      { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },

      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: '**', redirectTo: 'auth', pathMatch: 'full' }

    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
