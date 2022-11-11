import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarCursosComponent } from './component/acciones/agregar-cursos/agregar-cursos.component';
import { EditarCursosComponent } from './component/acciones/editar-cursos/editar-cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosComponent } from './component/cursos.component';


@NgModule({
  declarations: [  
    CursosComponent,
    AgregarCursosComponent,
    EditarCursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule    
  ]
})
export class CursosModule { }
