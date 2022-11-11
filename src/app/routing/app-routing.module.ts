import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { LoginComponent } from '../padre-main/login/components/login/login.component';
import { NoencontradoComponent } from '../padre-main/noencontrado/noencontrado.component';

const routes: Routes = [
  {
    path:'', 
    pathMatch:'full', 
    redirectTo:'login'
  },
  {
    path:'login', 
    component: LoginComponent
  }, 
  {
    path:'padre-main', 
    loadChildren: () => import('../padre-main/padre-main.module').then(x => x.PadreMainModule),
    canActivate: [AuthGuard]
  },
  {
    path:'**', 
    component: NoencontradoComponent
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
