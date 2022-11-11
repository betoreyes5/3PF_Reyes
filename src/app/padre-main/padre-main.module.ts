import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreMainComponent } from './padre-main.component';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { PadreMainRoutingModule } from './padre-main-routing.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    PadreMainComponent,
    InicioComponent
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    PadreMainRoutingModule,
    AlumnosModule,
    CursosModule
  ]
})
export class PadreMainModule { }
