import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/component/alumnos.component';
import { CursosComponent } from './cursos/component/cursos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { PadreMainComponent } from './padre-main.component';


const routes: Routes = [
    {
        path:'',
        component: PadreMainComponent, children: [
            { path: '', component: InicioComponent },
            { path: 'inicio', component: InicioComponent },
            { path: 'alumnos', component: AlumnosComponent },
            { path: 'cursos', component: CursosComponent },           
            { path:'**', component: NoencontradoComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PadreMainRoutingModule { }