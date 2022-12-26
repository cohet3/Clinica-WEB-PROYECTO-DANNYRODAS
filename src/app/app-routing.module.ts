import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
 
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule ),
    canActivate:[ ValidarTokenGuard],
    canLoad:[ ValidarTokenGuard]
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
  redirectTo:'auth'
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
