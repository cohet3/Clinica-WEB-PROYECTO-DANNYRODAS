import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
 
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
  path: '404',
  component: ErrorPageComponent
},
{
  path: '**',
  //component:ErrorPageComponent
  redirectTo:'404'
}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  
    RouterModule.forRoot ( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
